<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>jQuery Calculator</title>

    <!-- Added link to the jQuery Library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

    <!-- Added a link to Bootstrap-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

</head>
<body>

<!-- Jumbotron for Title -->
<div class="jumbotron">
    <h1 class="text-center">jQuery Calculator</h1>
    <h3 class="text-center">Perform basic mathematic operations using the power of jQuery!</h3>
</div>

<div class="container">

    <div class="row">

        <!-- Calculator Panel -->
        <div class="col-lg-4">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Calculator</h3>
                </div>

                <div class="panel-body">
                    <button id="button-1" class="btn btn-primary number" value="1"><h1>1</h1></button>
                    <button id="button-2" class="btn btn-primary number" value="2"><h1>2</h1></button>
                    <button id="button-3" class="btn btn-primary number" value="3"><h1>3</h1></button>
                    <button id="button-plus" class="btn btn-danger operator" value="plus"><h1>+</h1></button>
                    <br><br>
                    <button id="button-4" class="btn btn-primary number" value="4"><h1>4</h1></button>
                    <button id="button-5" class="btn btn-primary number" value="5"><h1>5</h1></button>
                    <button id="button-6" class="btn btn-primary number" value="6"><h1>6</h1></button>
                    <button id="button-minus" class="btn btn-danger operator" value="minus"><h1>&minus;</h1></button>
                    <br><br>
                    <button id="button-7" class="btn btn-primary number" value="7"><h1>7</h1></button>
                    <button id="button-8" class="btn btn-primary number" value="8"><h1>8</h1></button>
                    <button id="button-9" class="btn btn-primary number" value="9"><h1>9</h1></button>
                    <button id="button-multiply" class="btn btn-danger operator" value="times"><h1>&times;</h1></button>
                    <br><br>
                    <button id="button-0" class="btn btn-primary number" value="0"><h1>0</h1></button>
                    <button id="button-divide" class="btn btn-danger operator" value="divide"><h1>&divide;</h1></button>
                    <button id="button-power" class="btn btn-danger operator" value="power"><h1>^</h1></button>
                    <button id="button-equal" class="btn btn-success equal" value="equals"><h1>=</h1></button>
                    <br><br>
                    <button id="button-clear" class="btn btn-default clear" value="clear"><h1>clear</h1></button>
                </div>

            </div>
        </div>

        <!-- Result Panel -->
        <div class="col-lg-6">
        <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Result</h3>
                </div>
                <div class="panel-body">
                    <h1 id="first-number"></h1>
                    <h1 id="operator"></h1>
                    <h1 id="second-number"></h1>
                    <hr>
                    <h1 id="result"></h1>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">

</script>

</body>
</html>