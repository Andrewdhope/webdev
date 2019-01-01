<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
<xsl:for-each select="section[@option = $sectionVal]/bullet">
	<xsl:variable name="bullet" select="title/text()" /> <!-- add a trait to the bullet tag instead of relying on display title -->
	<div class="bullet" id="{$bullet}">
		<h2 onclick="expandBullet('{$bullet}')" class="collapsible"><xsl:value-of select="title"/></h2>
		<div class="line">
		<xsl:for-each select="line">
			<h3><xsl:value-of select="text()" /></h3>
			<xsl:for-each select="entry">
				<div class="entry">
					<xsl:choose>
						<!-- entries with one link -->
						<xsl:when test="count(link) = 1">
							<xsl:element name="a">
								<xsl:attribute name="href">
									<xsl:value-of select="link/text()" />
								</xsl:attribute>
								<xsl:attribute name="target">
									<xsl:text>"_blank"</xsl:text>
								</xsl:attribute>
								<xsl:value-of select="text()" />
							</xsl:element>
						</xsl:when>
						
						<!-- entries with multiple links -->
						<xsl:when test="count(linkset) = 1">
							<!-- entry name -->
							<span class="multi-entry"><xsl:value-of select="text()" /></span>
							<!-- set of links --> 
							<xsl:for-each select="linkset/link">
								<xsl:variable name="i" select="position()"/>
								<xsl:element name="a">
									<xsl:attribute name="class">
										<xsl:text>multi-entry</xsl:text>
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
					
						<!-- entries without links -->
						<xsl:otherwise>
							<span><xsl:value-of select="text()" /></span>
						</xsl:otherwise>
					</xsl:choose>
					
					<!-- build out the remaining nodes: maxes, books -->
					
					<!-- details -->
					<xsl:for-each select="detail">
						<!-- <span class="detail"> -->
						<sup><xsl:value-of select="text()" /></sup>
						<!-- </span> -->
					</xsl:for-each>
				</div>
			</xsl:for-each>
		</xsl:for-each>
		</div>
	</div>
</xsl:for-each>
</xsl:template>
</xsl:transform>