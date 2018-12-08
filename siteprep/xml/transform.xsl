<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
	<xsl:for-each select="section[@option = $sectionVal]/bullet">
		<xsl:variable name="bullet" select="title/text()" /> <!-- add a trait to the bullet tag instead of relying on display title -->
		<xsl:variable name="list" select="line" /> <!-- practicing with variables -->
		
		<span class="bullet" id="{$bullet}">
		<h2 onclick="expandBullet('{$bullet}')"><xsl:value-of select="title"/></h2>
		<xsl:for-each select="$list">
			<ul class="line">
				<xsl:value-of select="text()" />
				<xsl:for-each select="project">
					<br/>					
					
					<xsl:choose>
						<xsl:when test="count(link) &gt; 1">
							<span class="multi-project"><xsl:value-of select="text()" /></span>
							<xsl:for-each select="link">
								<!-- need to loop through the linkset here -->
								<!-- <xsl:variable name="link" select="text()" /> -->
								<a class="project" href="https://google.com">[#]</a>
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
								<xsl:text>title</xsl:text>
							</xsl:element>
						</xsl:when>
						<!-- add a condition for projects with a single link -->
						<xsl:otherwise>
							<!-- this is for projects without links -->
							<!-- change this to a span without a link -->
							<span class="project"><xsl:value-of select="text()" /></span>
						</xsl:otherwise>
					</xsl:choose>
					
					<xsl:for-each select="detail">
						<span class="detail"><xsl:value-of select="text()" /></span>
					</xsl:for-each>
					
					<xsl:choose>
						<xsl:when test="(count(role) = 1)"> <!-- AND no linkset -->
							<span class="role"><xsl:value-of select="role/text()" /></span>
						</xsl:when>
						<xsl:otherwise>	
							<div class="role-wrap">
								<xsl:for-each select="role">
									<span class="role"><xsl:value-of select="text()" /></span>
								</xsl:for-each>
							</div>
						</xsl:otherwise>
					</xsl:choose>
						
				</xsl:for-each>
			</ul>
		</xsl:for-each>
		</span>
	</xsl:for-each>
</xsl:template>
</xsl:transform>