<?php
/**
Template Name: Finance Calculator
*/
?>

<!DOCTYPE html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
<style>
.finance_calculator
{
	background: #fff;
}
.minus {
  position: relative;
  top: -15px;
}
</style>    
</head>

<body>
    <div class="finance_calculator"><?php echo do_shortcode('[elateorthodontics_calculator]'); ?></div>  
</body>
<?php  wp_footer(); ?>
</html>
