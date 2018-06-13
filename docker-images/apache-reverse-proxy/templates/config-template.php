
<?php
$STATIC_APP = getenv('STATIC_APP');
$DYNAMIC_APP = getenv('DYNAMIC_APP');
?>
<VirtualHost *:80>
  ServerName demo.res.ch
  ProxyPass '/api/students/' '<?php print "$DYNAMIC_APP"?>'
  ProxyPassReverse '/api/students/' '<?php print "$DYNAMIC_APP"?>'
  
  ProxyPass '/' '<?php print "$STATIC_APP"?>'
  ProxyPassReverse '/' '<?php print "$STATIC_APP"?>'
</VirtualHost> 
