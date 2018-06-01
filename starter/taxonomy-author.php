
    <?php include('/header.php');?>
    
    <!-- Main Begin -->
    <main>
        <section class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-2">
                        <!--<img src="http://placehold.it/128x128" class="img-circle">-->
                        <img src="https://s3.amazonaws.com/uifaces/faces/twitter/jm_denis/128.jpg" class="img-circle">
                    </div>
                    
                    <div class="col-md-5">
                        <p class="archive-type">Author</p>
                        <h1 class="page-title"><span class="vcard">Ben Cunnington</span></h1>
                        <div class="content-meta">
                            <a href=""><i class="fa fa-globe"></i></a>
                            <a href=""><i class="fa fa-facebook-square"></i></a>
                            <a href=""><i class="fa fa-twitter-square"></i></a>
                            <a href=""><i class="fa fa-instagram"></i></a>
                        </div>
                       <div class="archive-description">Use this area to describe the the author. If the author has an avatar it will either be <span class="collapse" id="viewdetails">
                        displayed to the left (desktop) or above (mobile). Below all the authors posts will be shown.
                        </span> <a data-toggle="collapse" data-target="#viewdetails">More</a>
                        </div>
                    </div>
                </div>
            </div>		
        </section>
        
        <?php include('/loops/loop-grid-fullwidth.php');?>
        
        <div class="container">
            <div class="row">
                <?php include('/loops/loop-grid-sidebar.php');?>
                <?php include('/loops/loop-list-default.php');?>
                
                <aside class="col-md-3">
                    this is the sidebar
                </aside>
            </div>
        </div>
    </main>
    <!-- Main End -->	
    
    <!-- Aside Starts -->	
    <aside class="col-md-12">
        
    </aside>
    <!-- Aside Ends -->       
    
    <script>
        $(document).ready(function () {
            $('body').removeClass('home blog hfeed');
            $('body').addClass('archive author john-doe');
        });
    </script>
    
    <?php include( 'footer.php');?>