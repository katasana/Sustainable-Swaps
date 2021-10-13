package com.lightningducks.sustainableswaps;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class SustainableswapsApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void testFindMinA6(){
		SustainableswapsApplication a = new SustainableswapsApplication();
		System.out.println("Find min test!");
		Assertions.assertEquals(50, a.findMin(new int[]{5, 29, 10, 34}));
	}

}
