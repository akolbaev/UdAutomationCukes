Feature: Portal  login

@SmokeTest
Scenario: Home page default login
	Given User is on NetBanking landing page
	When User logins into application with username "jin" and password "1234"
	Then Home page is populated
	And Cards are displayed are "true"

@MobileTest
Scenario: Home page default login
	Given User is on NetBanking landing page
	When User logins into application with username "jin" and password "1234"
	Then Home page is populated
	And Cards are displayed are "true"

		
		
	
	
	
	
	
	
	
	
	