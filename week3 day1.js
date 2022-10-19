<html>
<body>
    <label>Enter A Number</label>
    <input type="text" id="n1">
    <label>Enter A Second Number</label>
    <input type="text" id ="n2">
    <input type="button" value="Addition"onclick= "add()"><br>
    <div id="res"></div>
    <script>
        function add(){
        var n1 = parseInt(document.getElementById("n1").value);
        var n2 = parseInt(document.getElementById("n2").value);
        var sum =n1+n2;
        document.getElementById("rse").innerHTML=sum;
        }
        </script>
