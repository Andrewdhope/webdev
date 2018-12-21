<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
	<ul>
		<xsl:for-each select="section">
			<li>
				<xsl:element name="a"> <!-- span? -->
					<xsl:attribute name="href">
						<xsl:text>#</xsl:text>
					</xsl:attribute>
					<xsl:attribute name="onclick">
						ajaxLoad(xmlpath,buildCareer,xslpath,['<xsl:value-of select="@option" />'])
					</xsl:attribute>
					<xsl:value-of select="@option" />
				</xsl:element>
			</li>
				
		</xsl:for-each>
	</ul>
</xsl:template>
</xsl:transform>