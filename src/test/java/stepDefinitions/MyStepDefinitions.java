package stepDefinitions;

import java.util.List;

import org.junit.runner.RunWith;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import junit.framework.Assert;

//@RunWith(Cucumber.class)
public class MyStepDefinitions {

  @Given("^User is on NetBanking landing page$")
  public void user_is_on_netbanking_landing_page() throws Throwable {
	  System.out.println("Navigating to login URL");
  }
  
//  @When("^User logins into application with username and password$")
//  public void user_logins_into_application_with_username_and_password() throws Throwable {
//	  System.out.println("Login Successful");
//  }
  

@When("^User logins into application with username \"([^\"]*)\" and password \"([^\"]*)\"$")
public void user_logins_into_application_with_username_and_password(String arg1, String arg2) throws Throwable {
    // Write code here that turns the phrase above into concrete actions
		System.out.println( "username is: "+arg1);
		System.out.println( "password is: "+arg2);		
}

  @Then("^Home page is populated$")
  public void home_page_is_populated() throws Throwable {
	  System.out.println("Validated home page");
  }

  @Then("^Cards are displayed are \"([^\"]*)\"$")
  public void cards_are_displayed_are(String arg1) throws Throwable {
      // Write code here that turns the phrase above into concrete actions
      System.out.println("Cards are displayed: "+arg1);
  }

  @When("^User sign up with following details$")
  public void user_sign_up_with_following_details(DataTable data) throws Throwable {
      // Write code here that turns the phrase above into concrete actions
      // For automatic transformation, change DataTable to one of
      // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
      // E,K,V must be a scalar (String, Integer, Date, enum etc)
      List<List<String>> obj =  data.raw();
      System.out.print(obj.get(0).get(0)+" | ");
      String item =obj.get(0).get(0);
      //Assert.assertEquals(item, "asdfa");
      System.out.print(obj.get(0).get(1)+" | ");
      System.out.print(obj.get(0).get(2)+" | ");
      System.out.print(obj.get(0).get(3)+" | ");
      System.out.print(obj.get(0).get(4)+" | "+"\n");
      System.out.println("--------------");
  }
  
  @When("^User logins in to application with username user(\\d+) and password pass(\\d+)$")
  public void user_logins_in_to_application_with_username_user_and_password_pass(String username, String pass) throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  System.out.println(username +" | "+ pass);
  }

  @Given("^Validate the browser$")
  public void validate_the_browser() throws Throwable {
      // Write code here that turns the phrase above into concrete actions
     System.out.println("BROWSER VALID");
  }

  @When("^Browser is triggered$")
  public void browser_is_triggered() throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  System.out.println("BROWSER TRIGGERRED"); 
  }

  @Then("^Check if browses is started$")
  public void check_if_browses_is_started() throws Throwable {
      // Write code here that turns the phrase above into concrete actions
	  System.out.println("BROWSER STARTED");
  }

  
}
