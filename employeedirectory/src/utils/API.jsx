import axios from 'axios';

export default {
    dummyData: function() {
        $.ajax({
            url: 'https://randomuser.me/api/',
            dataType: 'json',
            success: function(data) {
              console.log(data);
            }
          });
    }
};