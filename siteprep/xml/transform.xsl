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
						<xsl:when test="count(linkset) = 1">
							<span class="multi-project"><xsl:value-of select="text()" /></span>
							<xsl:for-each select="linkset/link">
								<xsl:variable name="link" select="text()" />
								<a class="project" href="{$link}">[#]</a>
							</xsl:for-each>
						</xsl:when>
						<xsl:when test="count(link) = 1">
							<xsl:variable name="link" select="text()" />
							<a class="project" href="{$link}"><xsl:value-of select="text()" /></a>
						</xsl:when>
						<xsl:otherwise>
							<!-- what if there is a project but no link (consulting) -->
							<a class="project"><xsl:value-of select="text()" /></a>
						</xsl:otherwise>
					</xsl:choose>
					
					<xsl:for-each select="detail">
						<span class="detail"><xsl:value-of select="text()" /></span>
					</xsl:for-each>
					
					<xsl:choose>
						<xsl:when test="(count(role) &gt; 1) OR (count(linkset) &gt; 0)"> <!-- OR a linkset -->
							<div class="role-wrap">
								<xsl:for-each select="role">
									<span class="role"><xsl:value-of select="text()" /></span>
								</xsl:for-each>
							</div>
						</xsl:when>
						<xsl:otherwise>	
							<span class="role"><xsl:value-of select="role/text()" /></span>
						</xsl:otherwise>
					</xsl:choose>
						
				</xsl:for-each>
			</ul>
		</xsl:for-each>
		</span>
	</xsl:for-each>
</xsl:template>
</xsl:transform>