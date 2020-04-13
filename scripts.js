$("#first").on('click', (event) => {console.log('Yeah, you clicked me');
  });
$("#second").on('click', (event) => { $('#first').text('liked');
  });
$("#third").on('click', (event) => { $('button').css("background", "green");
});

 
