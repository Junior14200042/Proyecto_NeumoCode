/*package com.jr.springboot.backend.apirest.auth;

public class JwtConfig {
	
	public static final String LLAVE_SECRETA="alguna.clave.secreta.12345678";
	
	public static final String RSA_PRIVADA="-----BEGIN RSA PRIVATE KEY-----\r\n"
			+ "MIIEogIBAAKCAQEA5MC4RxgXd95jEmsvd8eBG26BVwYQRLQGb5+JaXkmumdrDerT\r\n"
			+ "L8N1O2vZEFAi8YdfTK9gaa/QHtfuPH3VaKN7fACMeczoCOrp2Ix6ynrNrkYUVtDq\r\n"
			+ "FjF7AXlB9OMoPkouqOAM2i8DSsNrtruJn9y3iognvP/DB/WiI+HAvToHv25ZbFvl\r\n"
			+ "YZOL5cdzzLHlQUN+MxlQ4LrN1pri5D29hqcIaXmdJxWGJPSV7gnStz2EUpL9jCmF\r\n"
			+ "9q6BtGAoYj2T8X0AMRSBK1q2GRMado8Ojr6IxbcVdeIcBHpOVPsBjmP1sTfobOxK\r\n"
			+ "wV1FIrCT+xjEkq/euj3amgdE33hBiqF5LgBCbwIDAQABAoIBAAMEB2noh2atJ+E2\r\n"
			+ "SInrt2gFLO9YxR4iwXL3R3h8gGY0ttSYI/CdQw5lfZcZd1x3zGnWZg7+ol/FuP5T\r\n"
			+ "Kl0Wyqn31+JDMUvszOht8bB5rfx+MAZ0+qEQRe7fCl+QHxezIqpXSdQWipSRvvnJ\r\n"
			+ "vya8Yi8RXHTBanDQbDLM5x2XhkKfy2x4H7QVbIIUyCKyhG9ogaaxM7vmt9pqtanb\r\n"
			+ "WRUA+tZEUIre/oTTMXxDzDOQ+yTpyMV0OuC1WJDcUVxyjh9UYZffZbyJeRY7kTeG\r\n"
			+ "+46PVhvepZiWYNGnLqkXfhQDy0nTW8uO3InA7XCaQ/fOlDnAz0zC8l3lBLbf9cdI\r\n"
			+ "dkiftQECgYEA9Hst+izaBORuKExDKuu8Cd+RyareMPEwWXJio6ypkROpaLBuX02Z\r\n"
			+ "cLA4bQBQ58SGHxilMQt65V3yJP3TysbHlKGNNg26OvM9uvZ2RTJ1nGRr+zr37k/j\r\n"
			+ "CWzlaSzS2i+9UonpbJZjlcCmhwabQm+vOLgmgeLlQHjwFNX7WOmDB80CgYEA74fU\r\n"
			+ "+o1HkwD3c/PLbell9JBQSnBk+1/qg1naOu62Zvc/9xM8Er8lIKlKJecqn4yXCVf2\r\n"
			+ "AtzpwGyvua8azVlf0Dnm0Q+jjjKtPWX2sAO5UVskvgM3++sb6sBV11eH1RmVXVGh\r\n"
			+ "p3eT/4Wun03PRsdvvm52a23VZG6g3rUrlnbcvysCgYAc/EW1NYAbuGF/EZudCRng\r\n"
			+ "KcuFF2cEcnQDBta/BQeNlcEuEkzjq7WXcK0f7zuoXtpv8WIUcIH/k6XT0Ow9TFf5\r\n"
			+ "PTYaxIHh31jgQ7w98/+RrS5IOPOQI5SNV4XTdGcDS0ms8YDlSOdBp/eWZqgdtlQV\r\n"
			+ "629VUutPO4drUPtdzUGluQKBgEW7TnZugMK8Ck34UGW8B9Ft3eH93HgN0VDR7KUx\r\n"
			+ "b2qEWlvMfrWabe2XOx3TsWXnYOT4dYcZ1vcM7Q9qeawEc89Du/1qxxuThzmToIBX\r\n"
			+ "ZTDZDtY+S6MMLAFoYtUhB0szendDV4NQXYaK3W5FEa2yS8atk83smK33Qt/y8DCK\r\n"
			+ "g/MnAoGAcbbyQbJHfCxiHlLXH3s15Xjo4b92Dh9Ww+cqUat5O0cL1F7YTQfnPaKw\r\n"
			+ "+QVcZJzNkvdkG5oKWy1SgfFScbJ6MYzFwa9dLEmV2uh4CtpeqYDiWiAbBtMlKDLe\r\n"
			+ "J7LH8tt0O8GtvbYSUBG+SzHlKc8XliAuhETovfNAMy4p9fZYwio=\r\n"
			+ "-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLICA ="-----BEGIN PUBLIC KEY-----\r\n"
			+ "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA5MC4RxgXd95jEmsvd8eB\r\n"
			+ "G26BVwYQRLQGb5+JaXkmumdrDerTL8N1O2vZEFAi8YdfTK9gaa/QHtfuPH3VaKN7\r\n"
			+ "fACMeczoCOrp2Ix6ynrNrkYUVtDqFjF7AXlB9OMoPkouqOAM2i8DSsNrtruJn9y3\r\n"
			+ "iognvP/DB/WiI+HAvToHv25ZbFvlYZOL5cdzzLHlQUN+MxlQ4LrN1pri5D29hqcI\r\n"
			+ "aXmdJxWGJPSV7gnStz2EUpL9jCmF9q6BtGAoYj2T8X0AMRSBK1q2GRMado8Ojr6I\r\n"
			+ "xbcVdeIcBHpOVPsBjmP1sTfobOxKwV1FIrCT+xjEkq/euj3amgdE33hBiqF5LgBC\r\n"
			+ "bwIDAQAB\r\n"
			+ "-----END PUBLIC KEY-----";
}
*/