<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
	<xsl:for-each select="section[@option = $sectionVal]/bullet">
		<xsl:variable name="bullet" select="title/text()" /> <!-- add a trait to the bullet tag instead of relying on display title -->
		<xsl:variable name="list" select="line" />
		<!-- <xsl:value-of select="$list" /> --> <!-- all text from all nodes under <line> -->
		<!-- 

			
		-->
		<span class="bullet" id="{$bullet}">
		<h2 onclick="expandBullet('{$bullet}')"><xsl:value-of select="title"/></h2>
		<xsl:for-each select="$list">
			<ul class="line">
				<xsl:value-of select="text()" />
				<xsl:for-each select="project">
					<br/>
					<xsl:variable name="link" select="link/text()" />
					<a class="project" href="$link"><xsl:value-of select="text()" /></a>
					<xsl:for-each select="role">
						<a class="role">|<xsl:value-of select="text()" /></a>
					</xsl:for-each>
				</xsl:for-each>
			</ul>
		</xsl:for-each>
		</span>
	</xsl:for-each>
</xsl:template>
<!-- 

-->
</xsl:transform>