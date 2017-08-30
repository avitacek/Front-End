//profile//
$(document).ready(function() {
    var max_fields      = 10; //maximum input boxes allowed
    var wrapper         = $(".traveler-block"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
    
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div class="content-inner"> <div class="row"> <div class="col-sm-12 column"> <div class="sublabel"> <p>Traveler <span id="traveller-count"></span></p><a href="#" class="remove_field"><i class="fa fa-minus" aria-hidden="true"></i></a><select> <option>John Doe</option> <option>Jane Doe</option> <option>John Smith</option> <option>Jane Smith</option> <option>Guest</option> </select> </div></div></div><div class="row"> <div class="col-sm-12 column"> <div class="form-group"> <p class="form-label">Full Legal Name</p><div class="row"> <div class="col-sm-12 col-md-4 columns"> <label>* First Name</label> <input class="cart-input" name="first_name" type="text" placeholder="First" required=""> </div><div class="col-sm-12 col-md-4 columns"> <label>Middle Name</label> <input class="cart-input" name="middle_name" type="text" placeholder="Middle"> </div><div class="col-sm-12 col-md-4 columns"> <label>* Last Name</label> <input class="cart-input" name="last_name" type="text" placeholder="Last"> </div></div></div></div></div><div class="row"> <div class="col-sm-12 col-md-12 columns"> <div class="form-group"> <p class="form-label">Passenger Summary</p><div class="row"> <div class="col-sm-4 columns"> <label>* Month</label> <select> <option>January</option> <option>Febuary</option> <option>March</option> <option>April</option> <option>May</option> <option>June</option> <option>July</option> <option>August</option> <option>September</option> <option>October</option> <option>November</option> <option>December</option> </select> </div><div class="col-sm-4 columns"> <label>* Day</label> <select> <option>1</option> <option>2</option> <option>3</option> <option>4</option> <option>5</option> <option>6</option> <option>7</option> <option>8</option> <option>9</option> <option>10</option> <option>11</option> <option>12</option> <option>13</option> <option>14</option> <option>15</option> <option>16</option> <option>17</option> <option>18</option> <option>19</option> <option>20</option> <option>21</option> <option>22</option> <option>23</option> <option>24</option> <option>25</option> <option>26</option> <option>27</option> <option>28</option> <option>29</option> <option>30</option> <option>31</option> </select> </div><div class="col-sm-4 columns"> <label>* Year</label> <select ng-model="traveler.dobYear" name="lname" > <option>2017</option> <option>2016</option> <option>2015</option> <option>2014</option> <option>2013</option> <option>2012</option> <option>2011</option> <option>2010</option> <option>2009</option> <option>2008</option> <option>2007</option> <option>2006</option> <option>2005</option> <option>2004</option> <option>2003</option> <option>2002</option> <option>2001</option> <option>2000</option> <option>1999</option> <option>1998</option> <option>1997</option> <option>1996</option> <option>1995</option> <option>1994</option> <option>1993</option> <option>1992</option> <option>1991</option> <option>1990</option> <option>1989</option> <option>1988</option> <option>1987</option> <option>1986</option> <option>1985</option> <option>1984</option> <option>1983</option> <option>1982</option> <option>1981</option> <option>1980</option> <option>1979</option> <option>1978</option> <option>1977</option> <option>1976</option> <option>1975</option> <option>1974</option> <option>1973</option> <option>1972</option> <option>1971</option> </select> </div><div class="col-sm-12 columns"> <label>* Gender</label> <select > <option>Male</option> <option>Female</option> </select> </div></div></div></div></div><div class="row"> <div class="col-sm-12 column"> <div class="form-group"> <p class="form-label">Contact Details</p><div class="row"> <div class="col-sm-12 col-mg-6 columns"> <label>* Phone</label> <input class="cart-input" name="phone" type="tel" placeholder="Phone Number"> </div><div class="col-sm-12 col-mg-6 columns"> <label>* E-mail</label> <input class="cart-input" name="email" type="text" placeholder="Email"> </div></div></div></div></div><div class="row" id="flyer-pref"> <div class="col-sm-12 column"> <div class="form-group"> <p class="form-label">Frequent Flyer, Redress, Known Traveler Numbers</p><div class="row"> <div class="col-sm-12 col-md-6 columns"> <label>Frequent Flyer Number</label> <input class="cart-input" name="ffnumber" type="text" placeholder="If you have one"> </div><div class="col-sm-12 col-md-6 columns"> <label>Frequent Flyer Airline</label> <select> <option ng-repeat="airline in airlines">American Airlines</option> <option ng-repeat="airline in airlines">Delta Airlines</option> <option ng-repeat="airline in airlines">Spirit Airlines</option> <option ng-repeat="airline in airlines">Frontier Airlines</option> <option ng-repeat="airline in airlines">Southwest Airlines</option> <option ng-repeat="airline in airlines">United Airlines</option> <option ng-repeat="airline in airlines">Virgin Airlines</option> </select> </div></div><div class="row collapse"> <div class="col-sm-12 col-md-6 columns"> <label>Known Traveler Number <img src="https://api.militarytogo.com/images/misc/tsa.png" width="52" height="15"></label> <input class="cart-input" name="ktnumber" type="text" placeholder="If you have one"> </div><div class="col-sm-12 col-md-6 columns"> <label>Redress Number</label> <input class="cart-input" name="rdnumber" type="text" placeholder="If you have one"> </div></div></div></div></div></div>'); //add input box
        }
    });
    
    $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
        e.preventDefault(); 
        $(this).closest('div.content-inner').remove(); x--;
    })
    function openguest(){
        console.log('toggle')
        $('#traveler-3').addClass('in');
    }
});