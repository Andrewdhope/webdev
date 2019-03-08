<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
<xsl:for-each select="section[@option = $sectionVal]/bullet">
	<xsl:variable name="bullet" select="normalize-space(title/text())" /> <!-- add a trait to the bullet tag instead of relying on display title -->
	<div class="bullet" id="{$bullet}">
	
		<!-- using the expanded notation for the h2 element to add if statements -->
		<!-- assign a class (collapsible, empty) based on whether there is content under this bullet -->
		<xsl:element name="h2">
			<xsl:if test="count(line) = 0">
				<xsl:attribute name="class">empty</xsl:attribute>
			</xsl:if>
			<xsl:if test="count(line) > 0">
				<xsl:attribute name="class">collapsible</xsl:attribute>
			</xsl:if>
			<xsl:attribute name="onclick">
				<xsl:text>expandBullet('</xsl:text><xsl:value-of select="$bullet" /><xsl:text>')</xsl:text>
			</xsl:attribute>
			<xsl:value-of select="title"/> <!-- actual value of the header -->
		</xsl:element>
		
		<xsl:if test="count(line) > 0">
			<span class="material-icons">expand_more</span>
		</xsl:if>
		
		<div class="lineset">
		
			<xsl:for-each select="line">
			<xsl:variable name="line" select="normalize-space(text())" />
			<!-- <xsl:variable name="linetest" select="normalize-space(text())" /> -->
			
			<!-- something about immutability of variables...
			<xsl:choose>
				<xsl:when test="contains($linetest,' ')">
					<xsl:variable name="line" select="substring-before($linetest,' ')" />
				</xsl:when>
				<xsl:otherwise>
					<xsl:variable name="line" select="$linetest" />
				</xsl:otherwise>
			</xsl:choose>
			-->
			
			<!-- element IDs shouldn't contain spaces, can use substring-before but with XSLT 2.0 -->
			<!-- <xsl:attribute name="id"><xsl:sequence select="upper-case($line)" /></xsl:attribute> -->
			<!-- <div class="line"> -->
			<div class="line" id="{$line}">
			
				<!-- using the expanded notation for the h3 element to add if statements -->
				<!-- assign a class (collapsible, empty) based on whether there is content under this line -->
				<xsl:element name="h3">
					<xsl:if test="count(project) = 0">
						<xsl:attribute name="class">empty</xsl:attribute>
					</xsl:if>
					<xsl:if test="count(project) > 0">
						<xsl:attribute name="class">collapsible</xsl:attribute>
					</xsl:if>
					<xsl:attribute name="onclick">
						<xsl:text>expandLine('</xsl:text><xsl:value-of select="$line" /><xsl:text>')</xsl:text>
					</xsl:attribute>
					<xsl:value-of select="normalize-space(text())"/> <!-- actual value of the header -->
				</xsl:element>
			
				<xsl:if test="count(project) > 0">
					<span class="material-icons">expand_more</span>
				</xsl:if>
				
				<xsl:for-each select="project">
					<div class="project">
						<xsl:choose>
							<!-- projects with one link -->
							<xsl:when test="count(link) = 1">
								<xsl:element name="a">
									<xsl:attribute name="href">
										<xsl:value-of select="normalize-space(link/text())" />
									</xsl:attribute>
									<xsl:attribute name="target">
										<xsl:text>"_blank"</xsl:text>
									</xsl:attribute>
									<xsl:value-of select="normalize-space(text())" />
								</xsl:element>
							</xsl:when>
							
							<!-- projects with multiple links -->
							<xsl:when test="count(linkset) = 1">
								<!-- project name -->
								<span class="multi-project"><xsl:value-of select="normalize-space(text())" /></span>
								<!-- set of links --> 
								<xsl:for-each select="linkset/link">
									<xsl:variable name="i" select="position()"/>
									<xsl:element name="a">
										<xsl:attribute name="class">
											<xsl:text>multi-project</xsl:text>
										</xsl:attribute>
										<xsl:attribute name="href">
											<xsl:value-of select="normalize-space(text())" />
										</xsl:attribute>
										<xsl:attribute name="target">
											<xsl:text>"_blank"</xsl:text>
										</xsl:attribute>
										<xsl:text>[</xsl:text><xsl:value-of select="$i" /><xsl:text>]</xsl:text>
									</xsl:element>
								</xsl:for-each>
							</xsl:when>
						
							<!-- projects without links -->
							<xsl:otherwise>
								<span><xsl:value-of select="normalize-space(text())" /></span>
							</xsl:otherwise>
						</xsl:choose>
						
						<!-- roles -->
						<xsl:if test="count(role) = 1">
							<span class="role"><xsl:value-of select="normalize-space(role/text())" /></span>
						</xsl:if>
						<!-- in some cases we want the roles in their own div below the project name -->
						<xsl:if test="(count(role) &gt; 1) or ((linkwrap) and (role))">
							<div class="role-wrap">
								<xsl:for-each select="role">
									<span class="role"><xsl:value-of select="normalize-space(text())" /></span>
								</xsl:for-each>
							</div>
						</xsl:if>
						
						<!-- details -->
						<xsl:for-each select="detail">
							<!-- <span class="detail"> -->
							<sup><xsl:value-of select="normalize-space(text())" /></sup>
							<!-- </span> -->
						</xsl:for-each>	
					</div>	
				</xsl:for-each>
			</div>
		</xsl:for-each>
		</div> <!-- lineset -->
	</div>
</xsl:for-each>
</xsl:template>
</xsl:transform>