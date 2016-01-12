var A1 = "", B1 = "", C1 = "", A2 = "", B2 = "", C2 = "", A3 = "", B3 = "", C3 = "";
var user = "";
var computer = "";
var x = 0;

$(document).ready(function() {
  
  $("#playing").hide();
  
  $("input[name='butty']").change(function(){
    if ($(this).val() === 'X') {
      user = "X";
      computer = "O";
      $("#choice").hide();
      $("#playing").show();
      $("#playing").html("You are " + user + ". Good luck!");
    } else {
      user = "O";
      computer = "X";
      $("#choice").hide();
      $("#playing").show();
      $("#playing").html("You are " + user + ". Good luck!");
      move();
      if (x === 5) {$("#playing").html("Tie game. Try again.");}
    }
  
  });

  $(".board").on("click", function(){
    var id = $(this).attr("id");
    if (window[id] ==="") {window[id] = user;}
    $("#" + id).html(window[id]);
    move();
    if (x === 5) {$("#playing").html("Tie game. Try again.");}
  });
  
  $("#reset").on("click", function(){
    A1 = "", B1 = "", C1 = "", A2 = "", B2 = "", C2 = "", A3 = "", B3 = "", C3 = "";
    user = "";
    computer = "";
    x = 0;
    $(".board").html("");
    $("#choice").show();
    $("#playing").hide();
    $("#team1").prop('checked', false);
    $("#team2").prop('checked', false);
  });
  
  function loser() {
    user = "";
    computer = "";
    $("#playing").html("YOU LOSE!!! TRY AGAIN.");
  }
  
   
  function move() {
    x += 1;
    if (A1 != "" && A1 === B1 && C1 === "") {C1 = computer; $("#C1").html(C1); if (A1 === computer) {loser();} else {return;}}
    if (A1 != "" && A1 === C1 && B1 === "") {B1 = computer; $("#B1").html(B1); if (A1 === computer) {loser();} else {return;}}
    if (B1 != "" && B1 === C1 && A1 === "") {A1 = computer; $("#A1").html(A1); if (B1 === computer) {loser();} else {return;}}
    if (A2 != "" && A2 === B2 && C2 === "") {C2 = computer; $("#C2").html(C2); if (A2 === computer) {loser();} else {return;}}
    if (A2 != "" && A2 === C2 && B2 === "") {B2 = computer; $("#B2").html(B2); if (A2 === computer) {loser();} else {return;}}
    if (B2 != "" && B2 === C2 && A2 === "") {A2 = computer; $("#A2").html(A2); if (B2 === computer) {loser();} else {return;}}
    if (A3 != "" && A3 === B3 && C3 === "") {C3 = computer; $("#C3").html(C3); if (A3 === computer) {loser();} else {return;}}
    if (A3 != "" && A3 === C3 && B3 === "") {B3 = computer; $("#B3").html(B3); if (A3 === computer) {loser();} else {return;}}
    if (B3 != "" && B3 === C3 && A3 === "") {A3 = computer; $("#A3").html(A3); if (B3 === computer) {loser();} else {return;}}
    if (A1 != "" && A1 === A2 && A3 === "") {A3 = computer; $("#A3").html(A3); if (A1 === computer) {loser();} else {return;}}
    if (A1 != "" && A1 === A3 && A2 === "") {A2 = computer; $("#A2").html(A2); if (A1 === computer) {loser();} else {return;}}
    if (A2 != "" && A2 === A3 && A1 === "") {A1 = computer; $("#A1").html(A1); if (A2 === computer) {loser();} else {return;}}
    if (B1 != "" && B1 === B2 && B3 === "") {B3 = computer; $("#B3").html(B3); if (B1 === computer) {loser();} else {return;}}
    if (B1 != "" && B1 === B3 && B2 === "") {B2 = computer; $("#B2").html(B2); if (B1 === computer) {loser();} else {return;}}
    if (B2 != "" && B2 === B3 && B1 === "") {B1 = computer; $("#B1").html(B1); if (B2 === computer) {loser();} else {return;}}
    if (C1 != "" && C1 === C2 && C3 === "") {C3 = computer; $("#C3").html(C3); if (C1 === computer) {loser();} else {return;}}
    if (C1 != "" && C1 === C3 && C2 === "") {C2 = computer; $("#C2").html(C2); if (C1 === computer) {loser();} else {return;}}
    if (C2 != "" && C2 === C3 && C1 === "") {C1 = computer; $("#C1").html(C1); if (C2 === computer) {loser();} else {return;}}
    if (A1 != "" && A1 === B2 && C3 === "") {C3 = computer; $("#C3").html(C3); if (A1 === computer) {loser();} else {return;}}
    if (A1 != "" && A1 === C3 && B2 === "") {B2 = computer; $("#B2").html(B2); if (A1 === computer) {loser();} else {return;}}
    if (B2 != "" && B2 === C3 && A1 === "") {A1 = computer; $("#A1").html(A1); if (B2 === computer) {loser();} else {return;}}
    if (C1 != "" && C1 === B2 && A3 === "") {A3 = computer; $("#A3").html(A3); if (C1 === computer) {loser();} else {return;}}
    if (B2 != "" && B2 === A3 && C1 === "") {C1 = computer; $("#C1").html(C1); if (B2 === computer) {loser();} else {return;}}
    if (C1 != "" && C1 === A3 && B2 === "") {B2 = computer; $("#B2").html(B2); if (C1 === computer) {loser();} else {return;}}
    
    if (B2 === "") {B2 = computer; $("#B2").html(B2); return;}
    
    if (B2 != user && B1 === "") {B1 = computer; $("#B1").html(B1); return;}
    if (B2 != user && A2 === "") {A2 = computer; $("#A2").html(A2); return;}
    if (B2 != user && C2 === "") {C2 = computer; $("#C2").html(C2); return;}
    if (B2 != user && B3 === "") {B3 = computer; $("#B3").html(B3); return;}
    
    if (A1 === "") {A1 = computer; $("#A1").html(A1); return;}
    if (C1 === "") {C1 = computer; $("#C1").html(C1); return;}
    if (A3 === "") {A3 = computer; $("#A3").html(A3); return;}
    if (C3 === "") {C3 = computer; $("#C3").html(C3); return;}
    
    if (B1 === "") {B1 = computer; $("#B1").html(B1); return;}
    if (A2 === "") {A2 = computer; $("#A2").html(A2); return;}
    if (C2 === "") {C2 = computer; $("#C2").html(C2); return;}
    if (B3 === "") {B3 = computer; $("#B3").html(B3); return;}
    
    $("#playing").html("Tie game. Try again.");
  }
  
  
  
});
