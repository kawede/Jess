<?php include('header.php') ?>
<div class="col-md-12"style="background-color: rgb(101,147,183); height:70px;">
  <div class="container">
    <h1 class="text-center text-white">Contact</h1>
  </div>
</div>

<div class="col-md-12">
  <div class="container">
    <div class="row">
   <!--    menu left contact -->
      <br><br><br>
      <div class="col-md-8">
        <h3 class="mt-4 text-left text-black">Ecrivez-nous</h3>
        <p class="text-left text-black">Veuillez nous laisser un message electronique ou contactez-nous à.</p>
        <hr style="border: 2px solid #f2f3f5;">
        <form method="POST" action="">
          <div class="col-md-12 form-group">
            <input type="text" name="nom" class="form-control bg-white" placeholder="Nom" required=""style="border: 2px solid #f2f3f5;">
            </div>
            <br>
            <div class="col-md-12 form-group">
            <input type="email" class="form-control bg-white" placeholder="votre email" name="email" required=""style="border: 2px solid #f2f3f5;">
            </div>
            <br>
            <div class="col-md-12 form-group">
            <input type="phone" class="form-control bg-white" placeholder="Numero" name="phone" required=""style="border: 2px solid #f2f3f5;">
            </div>
            <br>
            <div class="col-md-12 form-group">
            <textarea class="form-control bg-white" cols="30" placeholder="Message *" name="message" required="" style="border: 2px solid #f2f3f5;"></textarea>
            </div>
            <br>
            <div class="col-md-12 form-group">
            <button type="submit" class="btn btn-primary btn-block" name="btninscrit" style="background-color: rgb(77,117,156); font-family: candara; border:1px solid rgb(77,117,156);font-weight: bold;">
            <i class="fa fa-send mr-1"></i> Envoyer
            </button>
          </div>
          </form>
      </div>
     <!--  Menu right -->
        <div class="col-md-4 mt-4">
              <div class="row">
                  <div class="col-md-12">
                    <h3>Nous Contacter</h3>
                     <hr>
                  </div>

                  <div class="col-md-12">
                    <i class="fa fa-clock-o mr-1" style="color: rgb(2,4,104); font-size:19px; "></i>  Ouvert 24h/24h -Lundi au samedi
                     <hr>
                  </div>

                  <div class="col-md-12">
                    <i class="fa fa-phone mr-1" style="color: rgb(2,4,104); font-size:19px; "></i>  <a href="tel:+243817883541"> +2438 </a>
                     <hr>
                  </div>
                  <div class="col-md-12">
                    <i class="fa fa-envelope mr-1" style="color: rgb(2,4,104); font-size:19px; "></i>  <a href="mailto:info@congofirstchoice.com"> info@jess.com</a>
                     <hr>
                  </div>

                  <div class="col-md-12">
                    <i class="fa fa-map-marker mr-1" style="color: rgb(2,4,104); font-size:19px; "></i>  Siège Social : 136, Av la frontière, Q. Katindo C/ville de Goma
                     <hr>
                  </div>
                </div>
         </div>
    </div>
  </div>
</div>
<br>
<?php include('footer.php');?>