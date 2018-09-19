$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Account.feature");
formatter.feature({
  "line": 1,
  "name": "Portal  login",
  "description": "",
  "id": "portal--login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Home page default login",
  "description": "",
  "id": "portal--login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User logins into application with username \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 72701613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 44
    },
    {
      "val": "1234",
      "offset": 63
    }
  ],
  "location": "MyStepDefinitions.user_logins_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 1623651,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 94609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 98783,
  "status": "passed"
});
formatter.before({
  "duration": 75131,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Home page default login",
  "description": "",
  "id": "portal--login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User logins into application with username \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 66319,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 44
    },
    {
      "val": "1234",
      "offset": 63
    }
  ],
  "location": "MyStepDefinitions.user_logins_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 125681,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 25507,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 43594,
  "status": "passed"
});
formatter.after({
  "duration": 25044,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Application login",
  "description": "",
  "id": "application-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User logins into application with username \"jin\" and password \"1234\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 31536,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jin",
      "offset": 44
    },
    {
      "val": "1234",
      "offset": 63
    }
  ],
  "location": "MyStepDefinitions.user_logins_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 57508,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 20869,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 46841,
  "status": "passed"
});
formatter.before({
  "duration": 45449,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@MobileTest"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User logins into application with username \"john\" and password \"3214\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Cards are displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 47768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 44
    },
    {
      "val": "3214",
      "offset": 64
    }
  ],
  "location": "MyStepDefinitions.user_logins_into_application_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 150261,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 41275,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 75130,
  "status": "passed"
});
formatter.after({
  "duration": 22724,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User sign up with following details",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "email",
        "country",
        "phone"
      ],
      "line": 22
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Cards are displayed are \"false\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 142840,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.user_sign_up_with_following_details(DataTable)"
});
formatter.result({
  "duration": 1194202,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 33391,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "false",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 48232,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User logins in to application with username \u003cUsername\u003e and password \u003cPassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "application-login;home-page-default-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 35,
      "id": "application-login;home-page-default-login;;1"
    },
    {
      "cells": [
        "user1",
        "pass1"
      ],
      "line": 36,
      "id": "application-login;home-page-default-login;;2"
    },
    {
      "cells": [
        "user2",
        "pass2"
      ],
      "line": 37,
      "id": "application-login;home-page-default-login;;3"
    },
    {
      "cells": [
        "user3",
        "pass3"
      ],
      "line": 38,
      "id": "application-login;home-page-default-login;;4"
    },
    {
      "cells": [
        "user4",
        "pass4"
      ],
      "line": 39,
      "id": "application-login;home-page-default-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 36,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User logins in to application with username user1 and password pass1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 51942,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 48
    },
    {
      "val": "1",
      "offset": 67
    }
  ],
  "location": "MyStepDefinitions.user_logins_in_to_application_with_username_user_and_password_pass(String,String)"
});
formatter.result({
  "duration": 88579,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 69565,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 89044,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User logins in to application with username user2 and password pass2",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 87652,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 48
    },
    {
      "val": "2",
      "offset": 67
    }
  ],
  "location": "MyStepDefinitions.user_logins_in_to_application_with_username_user_and_password_pass(String,String)"
});
formatter.result({
  "duration": 96000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 115014,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 63536,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User logins in to application with username user3 and password pass3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 96464,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 48
    },
    {
      "val": "3",
      "offset": 67
    }
  ],
  "location": "MyStepDefinitions.user_logins_in_to_application_with_username_user_and_password_pass(String,String)"
});
formatter.result({
  "duration": 62609,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 23188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 45449,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Home page default login",
  "description": "",
  "id": "application-login;home-page-default-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@RegTest"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "User is on NetBanking landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User logins in to application with username user4 and password pass4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Home page is populated",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Cards are displayed are \"true\"",
  "keyword": "And "
});
formatter.match({
  "location": "MyStepDefinitions.user_is_on_netbanking_landing_page()"
});
formatter.result({
  "duration": 39884,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 48
    },
    {
      "val": "4",
      "offset": 67
    }
  ],
  "location": "MyStepDefinitions.user_logins_in_to_application_with_username_user_and_password_pass(String,String)"
});
formatter.result({
  "duration": 56580,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefinitions.home_page_is_populated()"
});
formatter.result({
  "duration": 25971,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "true",
      "offset": 25
    }
  ],
  "location": "MyStepDefinitions.cards_are_displayed_are(String)"
});
formatter.result({
  "duration": 48696,
  "status": "passed"
});
});