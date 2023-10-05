career.getElementById('quizForm').addEventListener('submit', e => {
    e.preventDefault();

    // Get user's answers
    const q1 = career.getElementById('q1').value;
    const q2 = career.getElementById('q2').value;
    const q3 = career.getElementById('q3').value;
    const q4 = career.getElementById('q4').value;
    const q5 = career.getElementById('q5').value;
    const q6 = career.getElementById('q6').value;
    const q7 = career.getElementById('q7').value;
    const q8 = career.getElementById('q8').value;
    const q9 = career.getElementById('q9').value;
    const q10 = career.getElementById('q10').value;
    const q11 = career.getElementById('q11').value;
    const q12 = career.getElementById('q12').value;
    const q13 = career.getElementById('q13').value;
    const q14 = career.getElementById('q14').value;
    const q15 = career.getElementById('q15').value;
    const q16 = document.getElementById('q16').value;
    const q17 = document.getElementById('q17').value;
    const q18 = document.getElementById('q18').value;
    const q19 = document.getElementById('q19').value;
    const q20 = document.getElementById('q20').value
    
     // Determine the personality result based on the answers
     let personalityResult1 = '';
     let personalityResult2 = '';
     let personalityResult3 = '';
     if ((q1 === 'SAgree' ||q1 === 'Agree')&& (q7 === 'SAgree' ||q7 === 'Agree')&&(q12 === 'SAgree' ||q12 === 'Agree')||(q17 === 'SAgree' ||q17 === 'Agree')) {
         personalityResult = 'Doctor';
     } 
     if ((q2 === 'SAgree' ||q2 === 'Agree')&& (q3 === 'SAgree' ||q3 === 'Agree')||(q10 === 'SAgree' ||q10 === 'Agree')||(q13 === 'SAgree' ||q13 === 'Agree')) {
        if(personalityResult1 == '')
            {personalityResult1 = 'Chef';}
        else
            {personalityResult2 = 'Chef';}
     }
     if ((q8 === 'SAgree' ||q8 === 'Agree')&& (q3 === 'SAgree' ||q3 === 'Agree')&&(q17 === 'SAgree' ||q17 === 'Agree')&&(q20 === 'SAgree' ||q20 === 'Agree')) {
        if(personalityResult1 == '')
            {personalityResult1 = 'Teacher';}
        else if(personalityResult2 == '')
            {personalityResult2 = 'Teacher';}
        else
            {personalityResult3 = 'Teacher';}
     } 
     if((q9 === 'SAgree' ||q9 === 'Agree')&& (q1 === 'SAgree' ||q1 === 'Agree')&& (q11 === 'SAgree' ||q11 === 'Agree')||(q7 === 'SAgree' ||q7 === 'Agree')&&(q12 === 'SAgree' ||q12 === 'Agree')){
         if(personalityResult1 == '')
            {personalityResult1 = 'Engineer';}
        else if(personalityResult2 == '')
            {personalityResult2 = 'Engineer';}
        else
            {personalityResult3 = 'Engineer';}
     }
    if((q2 === 'SAgree' ||q2 === 'Agree')&& (q7 === 'Agree')||(q1 === 'SAgree' ||q1 === 'Agree')||(q4 === 'SAgree' ||q4 === 'Agree')){
  
         if(personalityResult1 == '')
            {personalityResult1 = 'Artist';}
        else if(personalityResult2 == '')
            {personalityResult2 = 'Artist';}
        else
            {personalityResult3 = 'Artist';}
     }
    if((q8 === 'SAgree' ||q8 === 'Agree')|| (q6 === 'SAgree')&&(q5 === 'Agree' ||q5 === 'Agree')&&(q19 === 'SAgree' ||q19 === 'Agree')&&(q20 === 'SAgree' ||q20 === 'Agree')){

         if(personalityResult1 == '')
            {personalityResult1 = 'Sports person';}
        else if(personalityResult2 == '')
            {personalityResult2 = 'Sports person';}
        else
            {personalityResult3 = 'Sports person';}
     }
    if((q8 === 'SAgree' ||q8 === 'Agree')||(q6 === 'SAgree' ||q6 === 'Agree')||(q19 === 'SAgree' ||q19 === 'Agree')&&(q18 === 'SAgree' ||q18 === 'Agree')||(q17 === 'SAgree' ||q17 === 'Agree')){

         if(personalityResult1 == '')
            {personalityResult1 = 'Armed Officer';}
        else if(personalityResult2 == '')
            {personalityResult2 = 'Armed Officer';}
        else
            {personalityResult3 = 'Armed Officer';}
     }
    if((q6 === 'SAgree' ||q6 === 'Agree')||(q9 === 'SAgree' ||q9 === 'Agree')&&(q12 === 'SAgree' ||q12 === 'Agree')||(q14 === 'SAgree' ||q14 === 'Agree')){
  
         if(personalityResult1 == '')
            {personalityResult1 = 'Astronaut';}
        else if(personalityResult2 == '')
            {personalityResult2 = 'Astronaut';}
        else
            {personalityResult3 = 'Astronaut';}
     }
    if((q2 === 'SAgree' ||q2 === 'SAgree')&&(q7 === 'SAgree' ||q7 === 'SAgree')||(q4 === 'SAgree' ||q4 === 'SAgree')||(q9 === 'SAgree' ||q9 === 'SAgree')&&(q18 === 'SAgree' ||q18 === 'Agree')&&(q16 === 'SAgree' ||q16 === 'Agree')||(q13 === 'SAgree' ||q13 === 'Agree')){

         if(personalityResult1 == '')
            {personalityResult1 = 'Fshion Designer';}
        else if(personalityResult2 == '')
            {personalityResult2 = 'Fshion Designer';}
        else
            {personalityResult3 = 'Fshion Designer';}
     }
     
     document.getElementById('result').innerHTML = "hi";
     // Display the result
     document.getElementById('result').innerHTML = `<p>Your personality: ${personalityResult1} ${personalityResult2} ${personalityResult3}</p>`;

     if(personalityResult1 == ''||personalityResult2 == ''||personalityResult3 == ''){
        document.getElementById('result').innerHTML = `<p>"Sorry! Couldn't find compatible profession for you.</p>`; 
        }
 });