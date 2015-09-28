
<!DOCTYPE HTML>
<!--
	Retrospect by TEMPLATED
	templated.co @templatedco
        Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
    -->
<html>
<head>
    <title>Retro</title>
</head>
<body class="landing">

<!-- Header -->
@include('header')
<!-- Banner -->
@include('banner')

<!-- One -->
<section id="one" class="wrapper style1">
    <div class="inner">
        <article class="feature left">
            <span class="image"><img src="images/pic01.jpg" alt="" /></span>
            <div class="content">
                <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                <ul class="actions">
                    <li>
                        <a href="#" class="button alt">More</a>
                    </li>
                </ul>
            </div>
        </article>
        <article class="feature pushright">
            <span class="image"><img src="images/pic02.jpg" alt="" /></span>
            <div class="content">
                <h2>Integer vitae libero acrisus egestas placerat  sollicitudin</h2>
                <p>Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est.</p>
                <ul class="actions">
                    <li>
                        <a href="#" class="button alt">More</a>
                    </li>
                </ul>
            </div>
        </article>
    </div>
</section>
<!-- Two -->
<section id="two" class="wrapper special">
    <div class="inner" id='mainInfo'>

    </div>
</section>

<!-- Three -->
<section id="three" class="wrapper style3 special">
    <div class="inner">
        <header class="major narrow	">
            <h2>Another section</h2>
            <p>Description</p>
        </header>
        <ul class="actions">
            <li><a href="#" class="button big alt">More</a></li>
        </ul>
    </div>
</section>

<!-- Four -->
<section id="four" class="wrapper style2 special">
    <div class="inner">
        <header class="major narrow">
            <h2>Get in touch</h2>
            <p>Leave your Comment</p>
        </header>
        <form action="#" method="POST">
            <div class="container 75%">
                <div class="row uniform 50%">
                    <div class="6u 12u$(xsmall)">
                        <input name="name" placeholder="Name" type="text" />
                    </div>
                    <div class="6u$ 12u$(xsmall)">
                        <input name="email" placeholder="Email" type="email" />
                    </div>
                    <div class="12u$">
                        <textarea name="message" placeholder="Message" rows="4"></textarea>
                    </div>
                </div>
            </div>
            <ul class="actions">
                <li><input type="submit" class="special" value="Submit" /></li>
                <li><input type="reset" class="alt" value="Reset" /></li>
            </ul>
        </form>
    </div>
</section>

<!-- Footer -->
@include('footer')
</body>
</html>