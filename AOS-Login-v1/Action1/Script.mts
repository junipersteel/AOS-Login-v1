' Login 
' test
Browser("Advantage Shopping").Page("Advantage Shopping").Link("UserMenu").Click @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("username").Set "jarteaga" @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebEdit("password").SetSecure "63ce1b1e0e74a1f82e95f321aa83b7c1c1c415312e56c1ab" @@ script infofile_;_ZIP::ssf3.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Check CheckPoint("sign_in_btnundefined") @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebButton("sign_in_btnundefined").Click @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("jarteaga").Check CheckPoint("jarteaga") @@ script infofile_;_ZIP::ssf6.xml_;_
