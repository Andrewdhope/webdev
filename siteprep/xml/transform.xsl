<?xml version="1.0" encoding="UTF-8"?>
<xsl:transform version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="content">
	<xsl:for-each select="section[@option = $sectionVal]/bullet">
		<xsl:variable name="bullet" select="title/text()" />
		<xsl:variable name="list" select="line" />
		<!-- <xsl:value-of select="$list" /> --> <!-- all text from all nodes under <line> -->
		<!-- 
		need to verify that i'm setting the variable correctly,
		then ... ! ... try this ...
			make two variables, one with the bullet title, [check]
			one with the bullet's a complete node... or perhaps the node as a fully formed html fragment. [nearly]
			need to verify that the params remain intact at runtime. [verifying]
			call expandBullet with an onclick event and pass these params. [pending]
			expandBullet basically takes the returned node and calls transformToFragment with the given node and the generic document
			...or its passed the fully formed fragment and just clears and appends the correct sectionVal/bullet
			expandBullet will also need to take the bullet title and sectionVal so it can re-write the correct section
			and we basically tell expandBullet "put this fragment under this sectionVal/bullet"
		-->
		<h2 onclick="expandBullet('{$bullet}','{$list}')"><xsl:value-of select="title"/></h2>
		<xsl:for-each select="$list">
			<p><xsl:value-of select="text()" /></p>
		</xsl:for-each>
	</xsl:for-each>
</xsl:template>
<!-- 
<xsl:template match="bullet[@title = $titleVal]">
		<xsl:for-each select="line">
			<p><xsl:value-of select="text()" /></p>
		</xsl:for-each>
	</xsl:for-each>
</xsl:template>
-->
</xsl:transform>