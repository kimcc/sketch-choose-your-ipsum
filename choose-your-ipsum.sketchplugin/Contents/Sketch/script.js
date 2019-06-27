function onRun(context) {
    const sketch = context.api();
    const selection = context.selection;
    const identifier = context.command.identifier();
    const ipsumText = generateIpsum(identifier);
  
    // Alert if the user has not made a selection
    if (selection.length === 0) {
      sketch.alert('No layers selected', 'Select at least one text layer.');
      return;
    }
  
    // Alert if the user selects non-text layers
    if (!allText(selection)) {
      sketch.alert('Non-text layers selected', 'Select only text layers.');
      return;
    }
  
    // Fill layers with text. If the user selects a group of layers, fill those layers with text also.
    const fillText = (layers) => {
      layers.forEach((layer) => {
        if (layer.className() == 'MSTextLayer') {
          layer.stringValue = ipsumText;
        } else if (layer.className() == 'MSLayerGroup') {
          fillText(layer.layers());
        }
      });
    };
    fillText(selection);
  }
  
  // Check if the selected layers are all text layers
  function allText(layers) {
    return layers.every((layer) => {
      if (layer.className() == 'MSTextLayer') {
        return true;
      } else if (layer.className() == 'MSLayerGroup') {
        return allText(layer.layers());
      } else {
        return false;
      }
    });
  };
  
  // Set the text to different Lorem ipsum fillers based on the identifier
  function generateIpsum(ipsumType) {
    const ipsumArray = {
      loremIpsumText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      baconIpsumText: "Bacon ipsum dolor amet biltong strip steak picanha hamburger, buffalo ribeye ham rump burgdoggen pancetta chicken pig filet mignon. Brisket t-bone kielbasa pancetta strip steak fatback ball tip short ribs drumstick kevin porchetta flank filet mignon ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank. Tenderloin jerky picanha strip steak meatloaf shank shankle pig filet mignon",
      corporateIpsumText: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment. Bring to the table win-win survival strategies to ensure proactive domination.",
      cupcakeIpsumText: "Carrot cake bear claw candy canes gummi bears cookie gummies ice cream toffee dessert. Wafer croissant pastry dessert. Jelly bear claw jujubes lemon drops macaroon cupcake sesame snaps donut. Candy liquorice ice cream cake gummi bears lollipop carrot cake marzipan. Gummi bears cake carrot cake soufflé pudding chocolate cake. Oat cake donut topping jelly beans bonbon lemon drops. Cake caramels gummies jelly-o gummies pie.",
      hipsterIpsumText: "Retro fixie quinoa jean shorts blog chia. Truffaut craft beer bicycle rights roof party cronut fixie organic kale chips. Gentrify kombucha farm-to-table slow-carb health goth. Tattooed twee cliche raclette four dollar toast normcore. Mumblecore yuccie farm-to-table taxidermy, affogato copper mug wayfarers chillwave pickled tofu glossier selvage 3 wolf moon organic.",
      pirateIpsumText: "Heave to gaff flogging six pounders wench Shiver me timbers jib skysail come about American Main. Cog bilge barkadeer salmagundi case shot scuppers bilge water boom lateen sail gangway. Yardarm avast chase carouser rope's end Pieces of Eight lookout Letter of Marque Gold Road ho. Reef sails six pounders skysail code of conduct sloop cog Yellow Jack gunwalls grog blossom starboard.",
      tunaIpsumText: "Rough pomfret lemon shark plownose chimaera southern sandfish kokanee northern sea robin Antarctic cod. Yellow-and-black triplefin gulper South American Lungfish mahi-mahi, butterflyfish glass catfish soapfish ling gray mullet! Warbonnet denticle herring spiny-back cod straptail tailor zebra loach sea lamprey.",
      veggieIpsumText: "Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip. Sea lettuce lettuce water chestnut eggplant winter purslane fennel azuki bean earthnut pea sierra leone bologi leek soko chicory celtuce parsley jícama salsify. Pea horseradish azuki bean lettuce avocado asparagus okra. Celery potato scallion desert raisin horseradish spinach carrot.",
      zombieIpsumText: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus."
    };
  
    let ipsumText = '';
  
    if (ipsumType == 'lorem-ipsum') {
      ipsumText = ipsumArray.loremIpsumText;
    } else if (ipsumType == 'bacon-ipsum') {
      ipsumText = ipsumArray.baconIpsumText;
    } else if (ipsumType == 'corporate-ipsum') {
      ipsumText = ipsumArray.corporateIpsumText;
    } else if (ipsumType == 'cupcake-ipsum') {
      ipsumText = ipsumArray.cupcakeIpsumText;
    } else if (ipsumType == 'hipster-ipsum') {
      ipsumText = ipsumArray.hipsterIpsumText;
    } else if (ipsumType == 'pirate-ipsum') {
      ipsumText = ipsumArray.pirateIpsumText;
    } else if (ipsumType == 'tuna-ipsum') {
      ipsumText = ipsumArray.tunaIpsumText;
    } else if (ipsumType == 'veggie-ipsum') {
      ipsumText = ipsumArray.veggieIpsumText;
    } else if (ipsumType == 'zombie-ipsum') {
      ipsumText = ipsumArray.zombieIpsumText;
    }
    return ipsumText;
  }