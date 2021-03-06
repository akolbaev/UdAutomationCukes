Feature: Application login


@RegTest
Scenario: Home page default login
	Given User is on NetBanking landing page
	When User logins into application with username "jin" and password "1234"
	Then Home page is populated
	And Cards are displayed are "true"

@MobileTest
Scenario: Home page default login
	Given User is on NetBanking landing page
	When User logins into application with username "john" and password "3214"
	Then Home page is populated
	And Cards are displayed are "false"

@SmokeTest	
Scenario: Home page default login
	Given User is on NetBanking landing page
	When User sign up with following details
		| username	| password | email | country | phone |
	Then Home page is populated
	And Cards are displayed are "false"
	

@RegTest	
Scenario Outline: Home page default login 
	Given User is on NetBanking landing page 
	When User logins in to application with username <Username> and password <Password> 
	Then Home page is populated 
	And Cards are displayed are "true" 
	
	Examples: 
		|Username |Password 	|
		|user1		|pass1		|
		|user2		|pass2		|
		|user3		|pass3		|
		|user4		|pass4		|
		
		
	
	
	
	
	
	
	
	
	