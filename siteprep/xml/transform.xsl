<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
<xsl:for-each select="section[@option = $sectionVal]/bullet">
	<xsl:variable name="bullet" select="title/text()" /> <!-- add a trait to the bullet tag instead of relying on display title -->

	<div class="bullet" id="{$bullet}">
		<h2 onclick="expandBullet('{$bullet}')"><xsl:value-of select="title"/></h2>
		<xsl:for-each select="line">
			<div class="line">
			<ul>
				<xsl:value-of select="text()" />
				<xsl:for-each select="project">
					<br/>					
				
					<!-- projects with links -->
					<xsl:choose>
						<xsl:when test="count(linkset) = 1">
							<span class="multi-project"><xsl:value-of select="text()" /></span>
								<xsl:for-each select="linkset/link">
									<xsl:variable name="i" select="position()"/>
									<xsl:element name="a">
										<xsl:attribute name="class">
											<xsl:text>multi-project</xsl:text>
										</xsl:attribute>
										<xsl:attribute name="href">
											<xsl:value-of select="text()" />
										</xsl:attribute>
										<xsl:attribute name="target">
											<xsl:text>"_blank"</xsl:text>
										</xsl:attribute>
										<xsl:text>[</xsl:text><xsl:value-of select="$i" /><xsl:text>]</xsl:text>
									</xsl:element>
								</xsl:for-each>
						</xsl:when>
						
						<xsl:when test="count(link) = 1">
							<xsl:element name="a">
								<xsl:attribute name="class">
									<xsl:text>project</xsl:text>
								</xsl:attribute>
								<xsl:attribute name="href">
									<xsl:value-of select="link/text()" />
								</xsl:attribute>
								<xsl:attribute name="target">
									<xsl:text>"_blank"</xsl:text>
								</xsl:attribute>
								<xsl:value-of select="text()" />
							</xsl:element>
						</xsl:when>
					
						<xsl:otherwise>
							<!-- this is for projects without links -->
							<span class="project"><xsl:value-of select="text()" /></span>
						</xsl:otherwise>
					</xsl:choose>
										
					<!-- roles -->
					<xsl:if test="count(role) = 1">
						<span class="role"><xsl:value-of select="role/text()" /></span>
					</xsl:if>
					<!-- in some cases we want the roles in a rolewrap div below the project name -->
					<xsl:if test="(count(role) &gt; 1) or ((linkwrap) and (role))">
						<div class="role-wrap">
							<xsl:for-each select="role">
								<span class="role"><xsl:value-of select="text()" /></span>
							</xsl:for-each>
						</div>
					</xsl:if>
					
					<!-- details -->
					<xsl:for-each select="detail">
						<span class="detail"><xsl:value-of select="text()" /></span>
					</xsl:for-each>
					
				</xsl:for-each>
			</ul>
			</div>
		</xsl:for-each>
	</div>
</xsl:for-each>
</xsl:template>
</xsl:transform>