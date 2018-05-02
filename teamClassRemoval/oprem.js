jQuery(function($) {
  console.log('I am in');
  document.getElementsByTagName('page-id-1553').getElementById('timBreRow').getElementsByTagName('UL')[0].getElementsByTagName('a')[0].classList.remove('active');
	console.log('Class removed!');
	var adding = document.getElementById('timBreRow').getElementsByTagName('UL')[4].getElementsByTagName('a')[0];
	adding.classList.add('active');
	console.log('Class added!');
});


<script>
	jQuery(function($) {
  console.log('I am in');
  document.getElementsByTagName('page-id-1553').getElementById('post-1553').getElementById('timBreRow').getElementsByTagName('UL')[0].getElementsByTagName('a')[0].classList.remove('active');
	console.log('Class removed!');
	var adding = document.getElementById('timBreRow').getElementsByTagName('UL')[4].getElementsByTagName('a')[0];
	adding.classList.add('active');
	console.log('Class added!');
});

</script>
