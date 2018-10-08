<script type="text/javascript">
  $(document).ready(function(){
  // Using this for the Features Page to insert ID's so a menu can be used to link each section
    $('section').each(function(i) {
      $(this).attr( 'id', "section" + i );
    });

    // ALL Images Modal Pop Up
    $('section .modal-this').each(function(i) {
      ++i;
      var i = <?php
                    // Generate a random string for the Image ID for the modal to refrence
                    function generatePopId($length = 3) {
                        $characters = '123456789';
                        $randomString = '';
                        for ($i = 0; $i < $length; $i++) {
                            $randomString .= $characters[rand(0, strlen($characters) - 1)];
                        }
                        return $randomString;
                    }
                    $generatePopId = generatePopId();
                    print $generatePopId;
                ?> * i;
          // Add Unique ID's to the images
      $(this).find('img').attr( 'id', 'pop-' + i);

      // Create the Modal
      $('<div id="open-in-modal-' + i + '" class="modal fade" style="text-align: center;"><img src="" style="max-width: 1000px; height: auto; margin-top: 10%; margin-left: 8.5px; width: 100%;" alt=""></div>').insertBefore(this);

      // Jquery to pop up on click
      $('#pop-' + i + '').on("click", function() {$('#open-in-modal-' + i + '').modal("toggle");});

      //Create the ID for the Image Modal to match
      $('body > .page div.open-in-modal').each(function(index){
        ++index;
        var index = <?php print $generatePopId; ?> * index;
        $(this).attr('id', 'open-in-modal-' + index);
      });
    });
  });
</script>
