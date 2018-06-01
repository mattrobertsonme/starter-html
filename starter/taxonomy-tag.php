
    <?php include('/header.php');?>
    
    <!-- Main Begin -->
    <main>
        <section class="page-header">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <p class="archive-type">#Topic #BrooklynNineNine #B99</p>
                        <h1 class="page-title"><span class="vcard">Brooklyn Nine-Nine</span></h1>
                        <div class="archive-description">Use this area to describe the the tag. The description is not prominent by default; however, some themes may show it.</div>	
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
            $('body').addClass('archive tag tag-web-development');
        });
    </script>
    
    <?php include( 'footer.php');?>