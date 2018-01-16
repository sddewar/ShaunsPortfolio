<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/include.js"></script>
		<link href="https://fonts.googleapis.com/css?family=Raleway:500" rel="stylesheet">
		<link rel="stylesheet" type="text/css" href="css/style.css" />
		<link rel="stylesheet" type="text/css" href="css/style_large.css" />
	</head>
	<body>
		<div class="container" id="home">
			<div id="photo">
				<img id="img1" class="img1" src="images/Lake.JPG" />
				<img id="img2" class="img2" src="images/Castle.JPG" />
			</div>
			<div id="blank">
				<h1> Shaun Dewar's <br> Portfolio </h1>
				<img id="shaun" class="shaun" src="images/Shaun.jpg" />
				<p></p>
			</div>
			<div id="menu1">
				<a href="#projects"><div id="menuItem1" class="menuItem">
					<p>Projects</p>
				</div></a>
				<a href="#graphics"><div id="menuItem2" class="menuItem">
					<p>Graphics</p>
				</div></a>
				<a href="#sound"><div id="menuItem3" class="menuItem">
					<p>Sound Design</p>
				</div></a>
				<a href="#qualifications"><div id="menuItem4" class="menuItem">
					<p>Qualifications</p>
				</div></a>
			</div>
			<div id="menu2">
				<div id="mainmenu2" onclick="openNav()">
					<p>Menu &#9776;</p>
				</div>
			</div>
		</div>
		<?php include 'mainmenu.html';?>
		<?php include 'projects.html';?>
		<?php include 'projectindustry.html';?>
		<?php include 'userinterface.html';?>
		<?php include 'graphics.html';?>
		<?php include 'qualifications.html';?>
		<?php include 'sounddesign.html';?>
		<?php include 'about.html';?>
		<?php include 'contact.html';?>
	
	</body>

</html>