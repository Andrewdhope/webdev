<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
	<xsl:for-each select="section[@option = $sectionVal]/bullet">
		<h2><xsl:value-of select="title"/></h2>
		<xsl:for-each select="line">
			<p><xsl:value-of select="text()" /></p>
		</xsl:for-each>
	</xsl:for-each>
</xsl:template>
</xsl:transform>