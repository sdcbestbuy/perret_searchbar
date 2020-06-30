    //-----------------------------------------------------------------------------
    const tellOtherComponents = (idObj) => {
        event.preventDefault();
        console.log('Telling the other Components about', idObj);
        const otherComponents = {
          Image:'http://imagecomponent-env-1.eba-4mfwjdhg.us-east-2.elasticbeanstalk.com/',
          Carousel:'http://newcarousel-env.eba-irp2rurw.us-east-2.elasticbeanstalk.com/',
          Review:'http://111111-env.eba-9uquamkj.us-east-2.elasticbeanstalk.com/',
        };
        console.log('Searched Id is ',idObj);
        //Axios Get to Image Component
        Axios.get(otherComponents.Image,{
          body: idObj
        })
        .then((call)=>{
          console.log('Good Call To Image',call);
        })
        .catch((error)=>{
          console.log('Bad Call to Image',error)
        })
        .then(()=>{
          // Axios get to Carousel Component
          Axios.get(otherComponents.Carousel,{
            body: idObj
          })
          .then((call)=>{
            console.log('Good Call To Carousel',call);
          })
          .catch((error)=>{
            console.log('Bad Call to Carousel',error)
          })
          .then(()=>{
            //Axios get to Reviews Component
            Axios.get(otherComponents.Review,{
              body: idObj
            })
            .then((call)=>{
              console.log('Good Call To Review',call);
            })
            .catch((error)=>{
              console.log('Bad Call to Review',error)
            })
          })
        })
      };
    //-----------------------------------------------------------------------------