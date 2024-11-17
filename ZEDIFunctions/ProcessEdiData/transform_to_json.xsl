<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="text" indent="yes" />
    <xsl:template match="/">
        {
        <xsl:for-each select="Order">
            "OrderID": "<xsl:value-of select="OrderID"/>",
            "Customer": "<xsl:value-of select="Customer"/>",
            "Items": [
                <xsl:for-each select="Items/Item">
                {
                    "Product": "<xsl:value-of select="Product"/>",
                    "Quantity": <xsl:value-of select="Quantity"/>,
                    "Price": <xsl:value-of select="Price"/>
                }<xsl:if test="position()!=last()">,</xsl:if>
                </xsl:for-each>
            ]
        }
        }
    </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>