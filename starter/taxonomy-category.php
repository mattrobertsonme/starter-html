
    <?php include('/header.php');?>
    
    <!-- Main Begin -->
    <main>
        <section class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="archive-type">Category</p>
                        <h1 class="page-title"><span class="vcard">Internet</span></h1>
                        <div class="archive-description">Use this area to describe the the category. Lorem ipsum dolor sit amet, consectetur adipisicing elit. <span class="collapse" id="viewdetails">
                        Qui cupiditate, quaerat ipsum eaque, dignissimos facere hic nihil libero laboriosam perspiciatis aspernatur ratione! Illo nulla, inventore eligendi, voluptas architecto aliquid tempora.
                        </span> <a data-toggle="collapse" data-target="#viewdetails"><span>Show More</span></a>
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
            $('body').addClass('archive category category-web-development');
        });
    </script>
    
    <?php include( 'footer.php');?>