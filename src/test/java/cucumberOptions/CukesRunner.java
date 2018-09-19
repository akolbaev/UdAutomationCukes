package cucumberOptions;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/test/java/features/",
		glue="stepDefinitions"	
	//	, tags="@SmokeTest,@RegTest,@MobileTest"
	//	,monochrome=true //makes console more neat and clean
		//,strict=true // makes test fail for unimplements scenarios
		,plugin= {"pretty", "html:target/cucumber"
				, "json:target/cucumber.json"
				,"junit:target/cukes.xml"}
		//, dryRun=true // can be used as well 
		)
public class CukesRunner {
	
}
