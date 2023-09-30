process.env={
    
};
const miijs=require("miijs");
const {Client,ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder, GatewayIntentBits,ModalBuilder,TextInputBuilder, TextInputStyle}=require("discord.js");
const fs=require("fs");
const client=new Client({intents: Object.keys(GatewayIntentBits).map((a)=>{
    return GatewayIntentBits[a]
  })});
var startTime="";
var storage=require("./storage.json");
function save(){
    fs.writeFileSync("./storage.json",JSON.stringify(storage));
}
var emojis={
    emote: '1069173401115168839',
    star: '1072005387659780217',
    face1: '1157390233147559988',
    face2: '1157390234930122913',
    face3: '1157390237027287040',
    face4: '1157390238524641402',
    face5: '1157390240592445481',
    face6: '1157390242425339904',
    face7: '1157390244602196028',
    face8: '1157390246997135431',
    feature1: '1157399512214671360',
    feature2: '1157399514643185784',
    feature3: '1157399516480286760',
    feature4: '1157399519491784704',
    feature5: '1157399521173708860',
    feature6: '1157399523447021658',
    feature7: '1157399524340420649',
    feature8: '1157399525825200138',
    feature9: '1157399527926546482',
    feature10: '1157399529449062460',
    feature11: '1157399530568962099',
    "mouths":{
        '111': '1157466539897925673',
        '112': '1157466541286232165',
        '113': '1157466543937036369',
        '114': '1157466545384083497',
        '121': '1157466546520739973',
        '122': '1157467869722988646',
        '123': '1157466549045694585',
        '124': '1157466528317460520',
        '131': '1157467007361503362',
        '132': '1157467009341198347',
        '133': '1157466553021911071',
        '134': '1157466530917929000',
        '211': '1157467010087796808',
        '212': '1157467012075884636',
        '213': '1157467014915444746',
        '214': '1157466535842037831',
        '221': '1157466556960362516',
        '222': '1157467002730983518',
        '223': '1157466559866998884',
        '224': '1157466532834709584',
        '231': '1157467004698099743',
        '232': '1157467005805400064',
        '233': '1157466537259696169',
        '234': '1157466534944440350'
    },
    nose12: '1157495027862343700',
    nose11: '1157495030152437830',
    nose10: '1157495031482032180',
    nose9: '1157495033210085436',
    nose8: '1157495035747643432',
    nose7: '1157495036896870480',
    nose6: '1157495037987401760',
    nose5: '1157495040214564966',
    nose4: '1157495041477062686',
    nose3: '1157495043465170955',
    nose2: '1157495095940087808',
    nose1: '1157495045457457162',
    "eyes":{
        '111': '1157546548549386370',
        '112': '1157546550000615474',
        '113': '1157546546473218128',
        '114': '1157546551351189565',
        '121': '1157546869602398278',
        '122': '1157546864623751198',
        '123': '1157546866628644895',
        '124': '1157546867962421298',
        '131': '1157546983070892093',
        '132': '1157546984417263647',
        '133': '1157546986300526652',
        '134': '1157546987021946981',
        '211': '1157547153665818634',
        '212': '1157547155125452931',
        '213': '1157547150020989010',
        '214': '1157547152181047358',
        '221': '1157547269189541929',
        '222': '1157547270699503626',
        '223': '1157547271865503815',
        '224': '1157547267264368701',
        '231': '1157547345588793384',
        '232': '1157547347589468221',
        '233': '1157547348684197979',
        '234': '1157547350026358835',
        '311': '1157547452694544385',
        '312': '1157547448596701224',
        '313': '1157547450026958868',
        '314': '1157547446268870656',
        '321': '1157547509279895573',
        '322': '1157547512559841340',
        '323': '1157547505043652679',
        '324': '1157547507597979658',
        '331': '1157547669548449853',
        '332': '1157547672220205146',
        '333': '1157547673432358923',
        '334': '1157547675235922000',
        '411': '1157547775530119258',
        '412': '1157547778289967125',
        '413': '1157547779485335583',
        '414': '1157547780672335984',
        '421': '1157547827354935377',
        '422': '1157547821973655623',
        '423': '1157547824016261161',
        '424': '1157547825601716295',
        '431': '1157547899970916413',
        '432': '1157547901644460143',
        '433': '1157547902940479558',
        '434': '1157547897492086846'
    },
    stache3: '1157565683337539667',
    beard1: '1157565684910391387',
    beard2: '1157565686516813846',
    beard3: '1157565687926095945',
    stache1: '1157565689750618173',
    stache2: '1157565691117981819',
    glasses6: '1157577461001900082',
    glasses7: '1157577463107440690',
    glasses8: '1157577464462188624',
    glasses1: '1157577466525790219',
    glasses2: '1157577468660686848',
    glasses3: '1157577469751205968',
    glasses4: '1157577471286313071',
    glasses5: '1157577472951459900',
    eyebrow114: '1157703875495723069',
    eyebrow111: '1157703878989590629',
    eyebrow112: '1157703881472626699',
    eyebrow113: '1157703883481690253',
    eyebrow124: '1157703968923844669',
    eyebrow121: '1157703971704680499',
    eyebrow122: '1157703973235593258',
    eyebrow123: '1157703974623912006',
    eyebrow131: '1157704050800852992',
    eyebrow132: '1157704051958497321',
    eyebrow133: '1157704054164693083',
    eyebrow134: '1157704055766913186',
    eyebrow214: '1157704106836758561',
    eyebrow211: '1157704108099252314',
    eyebrow212: '1157704109907001365',
    eyebrow213: '1157704111798624367',
    eyebrow221: '1157704173404553276',
    eyebrow222: '1157704175849832579',
    eyebrow223: '1157704177011663039',
    eyebrow224: '1157704178215440405',
    eyebrow232: '1157704377704919120',
    eyebrow233: '1157704380120846376',
    eyebrow231: '1157704381257482302',
    hair113: '1157723519556272219',
    hair112: '1157723521607274526',
    hair111: '1157723522907504650',
    hair114: '1157723524123869205',
    hair123: '1157723560920490166',
    hair122: '1157723563562909717',
    hair121: '1157723564624060422',
    hair124: '1157723652788326501',
    hair133: '1157723655908901034',
    hair132: '1157723657192357908',
    hair131: '1157723660224843888',
    hair134: '1157723661948690512',
    hair214: '1157723763111100476',
    hair213: '1157723765069840435',
    hair212: '1157723766705618994',
    hair211: '1157723769960411279',
    hair224: '1157723812729729104',
    hair223: '1157723814516510762',
    hair222: '1157723816009666691',
    hair221: '1157723817649643580',
    hair234: '1157723870694998187',
    hair233: '1157723871890395206',
    hair232: '1157723874293723226',
    hair231: '1157723875942076437',
    hair314: '1157723939322208408',
    hair313: '1157723941452914728',
    hair312: '1157723942568595466',
    hair311: '1157723943927562352',
    hair324: '1157724012709957672',
    hair323: '1157724014664495215',
    hair322: '1157724015901802649',
    hair321: '1157724017306894336',
    hair334: '1157724057878405312',
    hair333: '1157724060243988530',
    hair332: '1157724061561004085',
    hair331: '1157724063159025784',
    hair412: '1157724183103545444',
    hair411: '1157724185041313845',
    hair414: '1157724186505130125',
    hair413: '1157724188270940190',
    hair424: '1157724228582391868',
    hair423: '1157724231543562320',
    hair422: '1157724233066086472',
    hair421: '1157724235620417719',
    hair434: '1157724268365357259',
    hair433: '1157724270374432808',
    hair432: '1157724271620145384',
    hair431: '1157724281078300852',
    hair514: '1157724355661406209',
    hair513: '1157724358001823785',
    hair512: '1157724359385956422',
    hair511: '1157724360530993172',
    hair524: '1157724397164048394',
    hair523: '1157724398644629504',
    hair522: '1157724400909553754',
    hair521: '1157724401924583436',
    hair534: '1157724431368585347',
    hair533: '1157724433662869636',
    hair532: '1157724435223158904',
    hair531: '1157724436393377883',
    hair611: '1157724522041057463',
    hair614: '1157724523131568238',
    hair613: '1157724528575787059',
    hair612: '1157724532099010590',
    hair624: '1157724570237804554',
    hair623: '1157724571466727576',
    hair622: '1157724573446447246',
    hair621: '1157724574671175790',
    hair634: '1157724617557934120',
    hair633: '1157724620556881953',
    hair632: '1157724622960209980',
    hair631: '1157724628094046329'
  };
client.once("ready",()=>{
    console.log("Logged in as "+client.user.tag);
    startTime=Date.now();
});
var defaultMii={
    info: {
      creatorName: '',
      name: 'Default',
      gender: 'Male',
      mingle: true,
      birthMonth: 0,
      birthday: 0,
      favColor: 'Red',
      favorited: false,
      height: 64,
      weight: 64,
      downloadedFromCheckMiiOut: false,
      type:"Normal"
    },
    face: { shape: 0, col: 'White', feature: 'None' },
    nose: { type: 0, size: 4, vertPos: 9 },
    mouth: { type: '111', col: 'Peach', size: 4, yPos: 13 },
    mole: { on: false, size: 4, xPos: 2, yPos: 20 },
    hair: { type: '111', col: 'Brown', flipped: false },
    eyebrows: {
      type: '111',
      rotation: 6,
      col: 'Brown',
      size: 4,
      yPos: 10,
      distApart: 2
    },
    eyes: {
      type: '111',
      rotation: 4,
      yPos: 12,
      col: 'Black',
      size: 4,
      distApart: 2
    },
    glasses: { type: 0, col: 'Grey', size: 4, yPos: 10 },
    facialHair: {
      mustacheType: 0,
      beardType: 0,
      col: 'Black',
      mustacheSize: 4,
      mustacheYPos: 10
    },
    name: 'Default',
    creatorName: ''
  };
  //5*5
/*
 - - - - -
 - - - - -
 - - - - -
 - - - - -
 - - - - -

 Basic Info
 Face
 Hair
 Eyebrows
 Eyes
 Nose
 Mouth
 Glasses
 Mole
 Facial Hair
 Wrinkles/Makeup
*/
var btns={
    "basicInfoPage":new ButtonBuilder().setCustomId('switch-basicInfo').setLabel('General Info').setStyle(ButtonStyle.Primary),
    "facePage":new ButtonBuilder().setCustomId('switch-face').setLabel('Face').setStyle(ButtonStyle.Primary),
    "hairPage":new ButtonBuilder().setCustomId('switch-hair').setLabel('Hair').setStyle(ButtonStyle.Primary),
    "eyebrowsPage":new ButtonBuilder().setCustomId('switch-eyebrows').setLabel('Eyebrows').setStyle(ButtonStyle.Primary),
    "eyesPage":new ButtonBuilder().setCustomId('switch-eyes').setLabel('Eyes').setStyle(ButtonStyle.Primary),
    "nosePage":new ButtonBuilder().setCustomId('switch-nose').setLabel('Nose').setStyle(ButtonStyle.Primary),
    "mouthPage":new ButtonBuilder().setCustomId('switch-mouth').setLabel('Mouth').setStyle(ButtonStyle.Primary),
    "glassesPage":new ButtonBuilder().setCustomId('switch-glasses').setLabel('Glasses').setStyle(ButtonStyle.Primary),
    "molePage":new ButtonBuilder().setCustomId('switch-mole').setLabel('Mole').setStyle(ButtonStyle.Primary),
    "faceHairPage":new ButtonBuilder().setCustomId('switch-faceHair').setLabel('Facial Hair').setStyle(ButtonStyle.Primary),
    "featuresPage":new ButtonBuilder().setCustomId('switch-features').setLabel('Wrinkles/Makeup').setStyle(ButtonStyle.Primary),
    "cancel":new ButtonBuilder().setCustomId('cancel').setLabel('Menu').setStyle(ButtonStyle.Danger),
    "name":new ButtonBuilder().setCustomId('input-name').setLabel('Change Name').setStyle(ButtonStyle.Primary),
    "birthday":new ButtonBuilder().setCustomId('input-birthday').setLabel('Change Birthday').setStyle(ButtonStyle.Primary),
    "genderPage":new ButtonBuilder().setCustomId('switch-gender').setLabel('Gender').setStyle(ButtonStyle.Primary),
    "male":new ButtonBuilder().setCustomId('male').setLabel('Male').setStyle(ButtonStyle.Primary),
    "female":new ButtonBuilder().setCustomId('female').setLabel('Female').setStyle(ButtonStyle.Primary),
    "colorPage":new ButtonBuilder().setCustomId('switch-color').setLabel('Change Favorite Color').setStyle(ButtonStyle.Primary),
    "reset":new ButtonBuilder().setCustomId('reset').setLabel('Reset Mii to Default').setStyle(ButtonStyle.Danger),
    "skinPage":new ButtonBuilder().setCustomId('switch-skin').setLabel('Skin Color').setStyle(ButtonStyle.Primary),
    "faceShapePage":new ButtonBuilder().setCustomId('switch-faceShape').setLabel('Face Shape').setStyle(ButtonStyle.Primary),
    "feature0":new ButtonBuilder().setCustomId("feature-0").setLabel("None").setStyle(ButtonStyle.Primary),
    "flip":new ButtonBuilder().setCustomId("flip").setLabel("Switch hair sides").setStyle(ButtonStyle.Primary),
    "hairColPage":new ButtonBuilder().setCustomId("switch-hairCol").setLabel("Hair Color").setStyle(ButtonStyle.Primary),
    "moleXPos":new ButtonBuilder().setCustomId("mole-x").setLabel("X Position").setStyle(ButtonStyle.Primary),
    "moleYPos":new ButtonBuilder().setCustomId("mole-y").setLabel("Y Position").setStyle(ButtonStyle.Primary),
    "moleSize":new ButtonBuilder().setCustomId("mole-s").setLabel("Size").setStyle(ButtonStyle.Primary),
    "moleToggle":new ButtonBuilder().setCustomId("mole-tog").setLabel("Toggle").setStyle(ButtonStyle.Primary),
    "height":new ButtonBuilder().setCustomId("height").setLabel("Height").setStyle(ButtonStyle.Primary),
    "weight":new ButtonBuilder().setCustomId("weight").setLabel("Weight").setStyle(ButtonStyle.Primary),
    "mouthColPage":new ButtonBuilder().setCustomId("switch-mouthCol").setLabel("Lip Color").setStyle(ButtonStyle.Primary),
    "mouthYPos":new ButtonBuilder().setCustomId("mouth-y").setLabel("Y Position").setStyle(ButtonStyle.Primary),
    "mouthSize":new ButtonBuilder().setCustomId("mouth-s").setLabel("Size").setStyle(ButtonStyle.Primary),
    "mouthTypePage":new ButtonBuilder().setCustomId("switch-mouthType1").setLabel("Mouth Type").setStyle(ButtonStyle.Primary),
    "mouthType1Page":new ButtonBuilder().setCustomId("switch-mouthType1").setLabel("Go to Page 1").setStyle(ButtonStyle.Primary),
    "mouthType2Page":new ButtonBuilder().setCustomId("switch-mouthType2").setLabel("Go to Page 2").setStyle(ButtonStyle.Primary),
    "noseYPos":new ButtonBuilder().setCustomId("noseYPos").setLabel("Y Position").setStyle(ButtonStyle.Primary),
    "noseSize":new ButtonBuilder().setCustomId("noseSize").setLabel("Size").setStyle(ButtonStyle.Primary),
    "noseTypePage":new ButtonBuilder().setCustomId("switch-noseType").setLabel("Nose Type").setStyle(ButtonStyle.Primary),
    "eyesTypePage":new ButtonBuilder().setCustomId("switch-eyesType1").setLabel("Eye Shape").setStyle(ButtonStyle.Primary),
    "eyesType1Page":new ButtonBuilder().setCustomId("switch-eyesType1").setLabel("Go to Page 1").setStyle(ButtonStyle.Primary),
    "eyesType2Page":new ButtonBuilder().setCustomId("switch-eyesType2").setLabel("Go to Page 2").setStyle(ButtonStyle.Primary),
    "eyesType3Page":new ButtonBuilder().setCustomId("switch-eyesType3").setLabel("Go to Page 3").setStyle(ButtonStyle.Primary),
    "eyesType4Page":new ButtonBuilder().setCustomId("switch-eyesType4").setLabel("Go to Page 4").setStyle(ButtonStyle.Primary),
    "eyeColorPage":new ButtonBuilder().setCustomId("switch-eyeColor").setLabel("Eye Color").setStyle(ButtonStyle.Primary),
    "eyesYPos":new ButtonBuilder().setCustomId("eyes-ypos").setLabel("Y Position").setStyle(ButtonStyle.Primary),
    "eyesDistApart":new ButtonBuilder().setCustomId("eyes-dist").setLabel("Distance Apart").setStyle(ButtonStyle.Primary),
    "eyesRot":new ButtonBuilder().setCustomId("eyes-rot").setLabel("Rotation").setStyle(ButtonStyle.Primary),
    "eyesSize":new ButtonBuilder().setCustomId("eyes-size").setLabel("Size").setStyle(ButtonStyle.Primary),
    "stacheTypePage":new ButtonBuilder().setCustomId('switch-stacheType').setLabel("Mustache Type").setStyle(ButtonStyle.Primary),
    "beardTypePage":new ButtonBuilder().setCustomId('switch-beardType').setLabel("Beard Type").setStyle(ButtonStyle.Primary),
    "stacheYPos":new ButtonBuilder().setCustomId('faceHairYPos').setLabel("Mustache Y Position").setStyle(ButtonStyle.Primary),
    "stacheSize":new ButtonBuilder().setCustomId('faceHairSize').setLabel("Mustache Size").setStyle(ButtonStyle.Primary),
    "faceHairColPage":new ButtonBuilder().setCustomId('switch-faceHairCol').setLabel("Facial Hair Color").setStyle(ButtonStyle.Primary),
    "beard0":new ButtonBuilder().setCustomId('beard-0').setLabel("None").setStyle(ButtonStyle.Primary),
    "beard1":new ButtonBuilder().setCustomId('beard-1').setEmoji(emojis.beard1).setStyle(ButtonStyle.Primary),
    "beard2":new ButtonBuilder().setCustomId('beard-2').setEmoji(emojis.beard2).setStyle(ButtonStyle.Primary),
    "beard3":new ButtonBuilder().setCustomId('beard-3').setEmoji(emojis.beard3).setStyle(ButtonStyle.Primary),
    "stache0":new ButtonBuilder().setCustomId('stache-0').setLabel("None").setStyle(ButtonStyle.Primary),
    "stache1":new ButtonBuilder().setCustomId('stache-1').setEmoji(emojis.stache1).setStyle(ButtonStyle.Primary),
    "stache2":new ButtonBuilder().setCustomId('stache-2').setEmoji(emojis.stache2).setStyle(ButtonStyle.Primary),
    "stache3":new ButtonBuilder().setCustomId('stache-3').setEmoji(emojis.stache3).setStyle(ButtonStyle.Primary),
    "eyebrowsTypePage":new ButtonBuilder().setCustomId('switch-eyebrowsType1').setLabel("Eyebrow Type").setStyle(ButtonStyle.Primary),
    "eyebrowsType1Page":new ButtonBuilder().setCustomId('switch-eyebrowsType1').setLabel("Go to Page 1").setStyle(ButtonStyle.Primary),
    "eyebrowsType2Page":new ButtonBuilder().setCustomId('switch-eyebrowsType2').setLabel("Go to Page 2").setStyle(ButtonStyle.Primary),
    "eyebrows-234":new ButtonBuilder().setCustomId("eyebrowsType-234").setLabel("None").setStyle(ButtonStyle.Primary),
    "eyebrowsColPage":new ButtonBuilder().setCustomId('switch-eyebrowsCol').setLabel("Eyebrow Color").setStyle(ButtonStyle.Primary),
    "eyebrowsYPos":new ButtonBuilder().setCustomId('eyebrows-ypos').setLabel("Y Position").setStyle(ButtonStyle.Primary),
    "eyebrowsRot":new ButtonBuilder().setCustomId('eyebrows-rot').setLabel("Rotation").setStyle(ButtonStyle.Primary),
    "eyebrowsDistApart":new ButtonBuilder().setCustomId('eyebrows-dist').setLabel("Distance Apart").setStyle(ButtonStyle.Primary),
    "eyebrowsSize":new ButtonBuilder().setCustomId('eyebrows-size').setLabel("Size").setStyle(ButtonStyle.Primary),
    "glassesTypePage":new ButtonBuilder().setCustomId('switch-glassesType').setLabel("Type of Glasses").setStyle(ButtonStyle.Primary),
    "glassesColPage":new ButtonBuilder().setCustomId('switch-glassesCol').setLabel("Tint").setStyle(ButtonStyle.Primary),
    "glassesYPos":new ButtonBuilder().setCustomId('glasses-ypos').setLabel("Y Position").setStyle(ButtonStyle.Primary),
    "glassesSize":new ButtonBuilder().setCustomId('glasses-size').setLabel("Size").setStyle(ButtonStyle.Primary),
    "glasses0":new ButtonBuilder().setCustomId('glassesType0').setLabel("None").setStyle(ButtonStyle.Primary),
    "hairStylePage":new ButtonBuilder().setCustomId('switch-hairStyle1').setLabel("Hair Style").setStyle(ButtonStyle.Primary),
    "hairStyle1Page":new ButtonBuilder().setCustomId('switch-hairStyle1').setLabel("Go to Page 1").setStyle(ButtonStyle.Primary),
    "hairStyle2Page":new ButtonBuilder().setCustomId('switch-hairStyle2').setLabel("Go to Page 2").setStyle(ButtonStyle.Primary),
    "hairStyle3Page":new ButtonBuilder().setCustomId('switch-hairStyle3').setLabel("Go to Page 3").setStyle(ButtonStyle.Primary),
    "hairStyle4Page":new ButtonBuilder().setCustomId('switch-hairStyle4').setLabel("Go to Page 4").setStyle(ButtonStyle.Primary),
    "hairStyle5Page":new ButtonBuilder().setCustomId('switch-hairStyle5').setLabel("Go to Page 5").setStyle(ButtonStyle.Primary),
    "hairStyle6Page":new ButtonBuilder().setCustomId('switch-hairStyle6').setLabel("Go to Page 6").setStyle(ButtonStyle.Primary),
    "export":new ButtonBuilder().setCustomId('switch-export').setLabel("Export").setStyle(ButtonStyle.Success),
    "exportBin":new ButtonBuilder().setCustomId('export-bin').setLabel("Wii .mii File").setStyle(ButtonStyle.Danger),
    "exportQR":new ButtonBuilder().setCustomId('export-qr').setLabel("3DS QR Code").setStyle(ButtonStyle.Danger),
    "confirmReset":new ButtonBuilder().setCustomId('confirmReset').setLabel("Confirm").setStyle(ButtonStyle.Danger),
    "cancelReset":new ButtonBuilder().setCustomId('cancelReset').setLabel("Cancel").setStyle(ButtonStyle.Success)
};
function getBtns(t){
    var ret;
    switch(t){
        case 0:
            ret=["Red","Orange","Yellow","Lime","Green","Blue","Cyan","Pink","Purple","Brown","White","Black"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('color-'+ret[i].toLowerCase()).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
        case 1:
            ret=["White","Tanned White","Darker Skin","Tanned Darker","Mostly Black","Black"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('skin-'+ret[i].toLowerCase().replaceAll(" ","-")).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
        case 2:
            ret=[];
            for(var i=1;i<9;i++){
                ret.push(new ButtonBuilder().setCustomId('shape-'+i).setEmoji(emojis["face"+i]).setStyle(ButtonStyle.Primary));
            }
        break;
        case 3:
            ret=[];
            for(var i=1;i<12;i++){
                ret.push(new ButtonBuilder().setCustomId('feature-'+i).setEmoji(emojis["feature"+i]).setStyle(ButtonStyle.Primary));
            }
        break;
        case 4:
            ret=["Black","Brown","Red","Reddish Brown","Grey","Light Brown","Dark Blonde","Blonde"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('hairCol-'+ret[i].toLowerCase().replaceAll(" ","-")).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
        case 5:
            ret=["Peach","Red","Pink"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('mouthCol-'+ret[i].toLowerCase()).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
        case 6:
            ret=[];
            for(var i=1;i<13;i++){
                ret.push(new ButtonBuilder().setCustomId("nose-"+i).setEmoji(emojis["nose"+i]).setStyle(ButtonStyle.Primary));
            }
        break;
        case 7:
            ret=["Black","Grey","Brown","Lime","Blue","Green"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('eyeCol-'+ret[i].toLowerCase()).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
        case 8:
            ret=["Black","Brown","Red","Reddish Brown","Grey","Light Brown","Dark Blonde","Blonde"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('faceHairCol-'+ret[i].toLowerCase().replaceAll(" ","-")).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
        case 9:
            ret=["Black","Brown","Red","Reddish Brown","Grey","Light Brown","Dark Blonde","Blonde"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('eyebrowsCol-'+ret[i].toLowerCase().replaceAll(" ","-")).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
        case 10:
            ret=[];
            for(var i=1;i<9;i++){
                ret.push(new ButtonBuilder().setCustomId('glassesType'+i).setEmoji(emojis["glasses"+i]).setStyle(ButtonStyle.Primary));
            }
        break;
        case 11:
            ret=["Grey","Brown","Red","Blue","Yellow","White"];
            for(var i=0;i<ret.length;i++){
                ret[i]=new ButtonBuilder().setCustomId('glassesCol-'+ret[i].toLowerCase()).setLabel(ret[i]).setStyle(ButtonStyle.Primary);
            }
        break;
    }
    if(typeof t==="string"){
        if(t.startsWith("m")){
            t=t[1];
            ret=[];
            for(var i=1;i<5;i++){
                for(var j=1;j<4;j++){
                    ret.push(new ButtonBuilder().setCustomId(`mouthType-${t}${j}${i}`).setEmoji(emojis.mouths[`${t}${j}${i}`]).setStyle(ButtonStyle.Primary));
                }
            }
        }
        if(t.startsWith("eb")){
            t=t[2];
            ret=[];
            for(var i=1;i<5;i++){
                for(var j=1;j<4;j++){
                    if(j===3&&i===4&&t==="2"){
                        continue;
                    }
                    ret.push(new ButtonBuilder().setCustomId(`eyebrowsType-${t}${j}${i}`).setEmoji(emojis[`eyebrow${t}${j}${i}`]).setStyle(ButtonStyle.Primary));
                }
            }
        }
        else if(t.startsWith("e")){
            t=t[1];
            ret=[];
            for(var i=1;i<5;i++){
                for(var j=1;j<4;j++){
                    ret.push(new ButtonBuilder().setCustomId(`eyeType-${t}${j}${i}`).setEmoji(emojis.eyes[`${t}${j}${i}`]).setStyle(ButtonStyle.Primary));
                }
            }
        }
        if(t.startsWith("h")){
            t=t[1];
            ret=[];
            for(var i=1;i<5;i++){
                for(var j=1;j<4;j++){
                    ret.push(new ButtonBuilder().setCustomId(`hairType-${t}${j}${i}`).setEmoji(emojis[`hair${t}${j}${i}`]).setStyle(ButtonStyle.Primary));
                }
            }
        }
    }
    return ret;
}
//var wiiCols=;
var presets={
    "menu":[
        new ActionRowBuilder().addComponents(btns.basicInfoPage,btns.facePage,btns.hairPage,btns.eyebrowsPage),
        new ActionRowBuilder().addComponents(btns.eyesPage,btns.nosePage,btns.mouthPage,btns.glassesPage),
        new ActionRowBuilder().addComponents(btns.molePage,btns.faceHairPage,btns.reset),
        new ActionRowBuilder().addComponents(btns.export)
    ],
    "exportPage":[
        new ActionRowBuilder().addComponents(btns.exportBin,btns.exportQR,btns.cancel)
    ],
    "basicInfoPage":[
        new ActionRowBuilder().addComponents(btns.name,btns.birthday,btns.genderPage),
        new ActionRowBuilder().addComponents(btns.colorPage,btns.height,btns.weight,btns.cancel)
    ],
    "facePage":[
        new ActionRowBuilder().addComponents(btns.faceShapePage,btns.skinPage,btns.featuresPage,btns.cancel),
    ],
    "faceShapePage":[
        new ActionRowBuilder().addComponents(...getBtns(2).slice(0,4)),
        new ActionRowBuilder().addComponents(...getBtns(2).slice(4,8)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "genderPage":[
        new ActionRowBuilder().addComponents(btns.male,btns.female,btns.cancel)
    ],
    "colorPage":[
        new ActionRowBuilder().addComponents(...getBtns(0).slice(0,4)),
        new ActionRowBuilder().addComponents(...getBtns(0).slice(4,8)),
        new ActionRowBuilder().addComponents(...getBtns(0).slice(8,12)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "skinPage":[
        new ActionRowBuilder().addComponents(...getBtns(1).slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns(1).slice(3,6)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "featuresPage":[
        new ActionRowBuilder().addComponents(btns.feature0,...getBtns(3).slice(0,2)),
        new ActionRowBuilder().addComponents(...getBtns(3).slice(2,5)),
        new ActionRowBuilder().addComponents(...getBtns(3).slice(5,8)),
        new ActionRowBuilder().addComponents(...getBtns(3).slice(8,11)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "hairPage":[
        new ActionRowBuilder().addComponents(btns.hairStylePage,btns.hairColPage,btns.flip,btns.cancel)
    ],
    "hairColPage":[
        new ActionRowBuilder().addComponents(...getBtns(4).slice(0,4)),
        new ActionRowBuilder().addComponents(...getBtns(4).slice(4,8)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "molePage":[
        new ActionRowBuilder().addComponents(btns.moleXPos,btns.moleYPos,btns.moleSize,btns.moleToggle,btns.cancel)
    ],
    "mouthPage":[
        new ActionRowBuilder().addComponents(btns.mouthTypePage,btns.mouthColPage,btns.mouthYPos,btns.mouthSize,btns.cancel)
    ],
    "mouthColPage":[
        new ActionRowBuilder().addComponents(...getBtns(5),btns.cancel)
    ],
    "mouthType1Page":[
        new ActionRowBuilder().addComponents(...getBtns("m1").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("m1").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("m1").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("m1").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.mouthType2Page,btns.cancel)
    ],
    "mouthType2Page":[
        new ActionRowBuilder().addComponents(...getBtns("m2").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("m2").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("m2").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("m2").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.mouthType1Page,btns.cancel)
    ],
    "nosePage":[
        new ActionRowBuilder().addComponents(btns.noseTypePage,btns.noseYPos,btns.noseSize,btns.cancel)
    ],
    "noseTypePage":[
        new ActionRowBuilder().addComponents(...getBtns(6).slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns(6).slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns(6).slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns(6).slice(9,12)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "eyesPage":[
        new ActionRowBuilder().addComponents(btns.eyesTypePage,btns.eyeColorPage,btns.eyesSize),
        new ActionRowBuilder().addComponents(btns.eyesYPos,btns.eyesDistApart,btns.eyesRot,btns.cancel)
    ],
    "eyeColorPage":[
        new ActionRowBuilder().addComponents(...getBtns(7).slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns(7).slice(3,6)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "eyesType1Page":[
        new ActionRowBuilder().addComponents(...getBtns("e1").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("e1").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("e1").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("e1").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.eyesType2Page,btns.cancel)
    ],
    "eyesType2Page":[
        new ActionRowBuilder().addComponents(...getBtns("e2").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("e2").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("e2").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("e2").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.eyesType1Page,btns.eyesType3Page,btns.cancel)
    ],
    "eyesType3Page":[
        new ActionRowBuilder().addComponents(...getBtns("e3").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("e3").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("e3").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("e3").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.eyesType2Page,btns.eyesType4Page,btns.cancel)
    ],
    "eyesType4Page":[
        new ActionRowBuilder().addComponents(...getBtns("e4").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("e4").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("e4").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("e4").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.eyesType3Page,btns.cancel)
    ],
    "faceHairPage":[
        new ActionRowBuilder().addComponents(btns.stacheTypePage,btns.stacheYPos,btns.stacheSize,btns.beardTypePage,btns.faceHairColPage),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "faceHairColPage":[
        new ActionRowBuilder().addComponents(...getBtns(8).slice(0,4)),
        new ActionRowBuilder().addComponents(...getBtns(8).slice(4,8)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "beardTypePage":[
        new ActionRowBuilder().addComponents(btns.beard0,btns.beard1,btns.beard2,btns.beard3,btns.cancel)
    ],
    "stacheTypePage":[
        new ActionRowBuilder().addComponents(btns.stache0,btns.stache1,btns.stache2,btns.stache3,btns.cancel)
    ],
    "eyebrowsPage":[
        new ActionRowBuilder().addComponents(btns.eyebrowsTypePage,btns.eyebrowsColPage,btns.eyebrowsSize),
        new ActionRowBuilder().addComponents(btns.eyebrowsYPos,btns.eyebrowsRot,btns.eyebrowsDistApart,btns.cancel)
    ],
    "eyebrowsColPage":[
        new ActionRowBuilder().addComponents(...getBtns(9).slice(0,4)),
        new ActionRowBuilder().addComponents(...getBtns(9).slice(4,8)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "eyebrowsType1Page":[
        new ActionRowBuilder().addComponents(...getBtns("eb1").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("eb1").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("eb1").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("eb1").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.eyebrowsType2Page,btns.cancel)
    ],
    "eyebrowsType2Page":[
        new ActionRowBuilder().addComponents(...getBtns("eb2").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("eb2").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("eb2").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("eb2").slice(9,11),btns["eyebrows-234"]),
        new ActionRowBuilder().addComponents(btns.eyebrowsType1Page,btns.cancel)
    ],
    "glassesPage":[
        new ActionRowBuilder().addComponents(btns.glassesTypePage,btns.glassesColPage,btns.glassesSize,btns.glassesYPos,btns.cancel)
    ],
    "glassesTypePage":[
        new ActionRowBuilder().addComponents(btns.glasses0,...getBtns(10).slice(0,2)),
        new ActionRowBuilder().addComponents(...getBtns(10).slice(2,5)),
        new ActionRowBuilder().addComponents(...getBtns(10).slice(5,8)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "glassesColPage":[
        new ActionRowBuilder().addComponents(...getBtns(11).slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns(11).slice(3,6)),
        new ActionRowBuilder().addComponents(btns.cancel)
    ],
    "hairStyle1Page":[
        new ActionRowBuilder().addComponents(...getBtns("h1").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("h1").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("h1").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("h1").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.hairStyle2Page,btns.cancel)
    ],
    "hairStyle2Page":[
        new ActionRowBuilder().addComponents(...getBtns("h2").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("h2").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("h2").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("h2").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.hairStyle1Page,btns.hairStyle3Page,btns.cancel)
    ],
    "hairStyle3Page":[
        new ActionRowBuilder().addComponents(...getBtns("h3").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("h3").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("h3").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("h3").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.hairStyle2Page,btns.hairStyle4Page,btns.cancel)
    ],
    "hairStyle4Page":[
        new ActionRowBuilder().addComponents(...getBtns("h4").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("h4").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("h4").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("h4").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.hairStyle3Page,btns.hairStyle5Page,btns.cancel)
    ],
    "hairStyle5Page":[
        new ActionRowBuilder().addComponents(...getBtns("h5").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("h5").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("h5").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("h5").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.hairStyle4Page,btns.hairStyle6Page,btns.cancel)
    ],
    "hairStyle6Page":[
        new ActionRowBuilder().addComponents(...getBtns("h6").slice(0,3)),
        new ActionRowBuilder().addComponents(...getBtns("h6").slice(3,6)),
        new ActionRowBuilder().addComponents(...getBtns("h6").slice(6,9)),
        new ActionRowBuilder().addComponents(...getBtns("h6").slice(9,12)),
        new ActionRowBuilder().addComponents(btns.hairStyle5Page,btns.cancel)
    ],
    "name":new ModalBuilder()
        .setCustomId("inputtedName")
        .setTitle("Change Name")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
            .setCustomId("name")
            .setMaxLength(10)
            .setLabel("Name of Mii")
            .setRequired(true)
            .setStyle(TextInputStyle.Short)
    )),
    "birthday":new ModalBuilder()
        .setCustomId("inputtedBirthday")
        .setTitle("Change Birthday")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("birthmonth")
                .setMaxLength(2)
                .setLabel("Birthmonth (1-12)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short)),
            new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("birthday")
                .setMaxLength(2)
                .setLabel("Birthday (1-31)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short)
    )),
    "moleX":new ModalBuilder()
        .setCustomId("inputtedMoleXPos")
        .setTitle("Change Mole X Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("X Position (0-16, default 2)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "moleY":new ModalBuilder()
        .setCustomId("inputtedMoleYPos")
        .setTitle("Change Mole Y Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Y Position (0-30, default 20)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "moleS":new ModalBuilder()
        .setCustomId("inputtedMoleSize")
        .setTitle("Change Mole Size")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Size (0-8, default 4)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "mouthY":new ModalBuilder()
        .setCustomId("inputtedMouthYPos")
        .setTitle("Change Mouth Y Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Y Position (0-18, default 13)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "mouthS":new ModalBuilder()
        .setCustomId("inputtedMouthSize")
        .setTitle("Change Mouth Size")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Size (0-8, default 4)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "noseYPos":new ModalBuilder()
        .setCustomId("inputtedNoseYPos")
        .setTitle("Change Nose Y Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Y Position (0-18, default 9)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "noseSize":new ModalBuilder()
        .setCustomId("inputtedNoseSize")
        .setTitle("Change Nose Size")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Size (0-8, default 4)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyes-ypos":new ModalBuilder()
        .setCustomId("inputtedEyesYPos")
        .setTitle("Change Eye Y Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Y Position (0-18, default 12)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyes-size":new ModalBuilder()
        .setCustomId("inputtedEyesSize")
        .setTitle("Change Eye Size")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Size (0-7, default 4)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyes-dist":new ModalBuilder()
        .setCustomId("inputtedEyesDistApart")
        .setTitle("Change Distance between Eyes")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Distance Apart (0-12, default 2)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyes-rot":new ModalBuilder()
        .setCustomId("inputtedEyesRot")
        .setTitle("Change Eye Rotation")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Rotation (0-7)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyebrows-ypos":new ModalBuilder()
        .setCustomId("inputtedEyebrowsYPos")
        .setTitle("Change Eyebrow Y Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Y Position (3-18, default 10)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyebrows-size":new ModalBuilder()
        .setCustomId("inputtedEyebrowsSize")
        .setTitle("Change Eyebrow Size")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Size (0-8, default 4)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyebrows-dist":new ModalBuilder()
        .setCustomId("inputtedEyebrowsDistApart")
        .setTitle("Change Distance between Eyebrows")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Distance Apart (0-12, default 2)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "eyebrows-rot":new ModalBuilder()
        .setCustomId("inputtedEyebrowsRot")
        .setTitle("Change Eye Rotation")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Rotation (0-7)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "faceHairYPos":new ModalBuilder()
        .setCustomId("inputtedFaceHairYPos")
        .setTitle("Change Mustache Y Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Y Position (0-16, default 10)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "faceHairSize":new ModalBuilder()
        .setCustomId("inputtedFaceHairSize")
        .setTitle("Change Mustache Size")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Size (0-8, default 4)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "glasses-ypos":new ModalBuilder()
        .setCustomId("inputtedGlassesYPos")
        .setTitle("Change Glasses Y Position")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(2)
                .setLabel("Y Position (0-20, default 10)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "glasses-size":new ModalBuilder()
        .setCustomId("inputtedGlassesSize")
        .setTitle("Change Size of Glasses")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("d")
                .setMaxLength(1)
                .setLabel("Size (0-7, default 4)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "height":new ModalBuilder()
        .setCustomId("height")
        .setTitle("Change Height")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("height")
                .setMaxLength(3)
                .setLabel("Height (0-127, default 64)")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "weight":new ModalBuilder()
        .setCustomId("weight")
        .setTitle("Change Weight")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId("weight")
                .setMaxLength(3)
                .setLabel("Weight (0-127, default 64")
                .setRequired(true)
                .setStyle(TextInputStyle.Short))
    ),
    "reset":new ModalBuilder()
        .setCustomId("resetMii")
        .setTitle("Reset Mii to Default")
        .addComponents(new ActionRowBuilder().addComponents(new TextInputBuilder()
                .setCustomId('confirm')
                .setMaxLength(1)
                .setLabel("Enter Y to confirm, anything else to cancel.")
                .setRequired(true)
                .setStyle(TextInputStyle.Short)
    ))
};
function getInfoText(jsonIn,userId){
    return `- Name: **${jsonIn.name}**\n- Gender: **${jsonIn.info.gender}**\n- Birthday (MM/DD): ${jsonIn.info.birthMonth}/${jsonIn.info.birthday}\n- Creator: <@${userId}>`;
}
function getClone(obj){
    return JSON.parse(JSON.stringify(obj));
}
client.on("interactionCreate",async cmd=>{
    switch(cmd.commandName){
        case 'ping':
            cmd.reply(`**Pong!**\n- Ping: ${client.ws.ping} milliseconds\n- Last started: <t:${Math.round(startTime/1000)}:f>\n- Uptime: ${(Math.round(Date.now()-startTime)/(1000*60*60)).toFixed(2)} hours`);
        break;
        case 'create-mii':
            if(cmd.user.id in storage){
                cmd.reply({content:"<@"+cmd.user.id+">, this will **overwrite** the last Mii you were working on, do you wish to continue? You can use /edit-mii to edit the old one.",components:[new ActionRowBuilder().addComponents(btns.confirmReset,btns.cancelReset)]});
            }
            else{
                await cmd.deferReply();
                storage[cmd.user.id]=getClone(defaultMii);
                storage[cmd.user.id].info.creatorName=cmd.user.username;
                storage[cmd.user.id].creatorName=cmd.user.username;
                save();
                var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
                miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
                setTimeout(()=>{cmd.editReply({content:getInfoText(storage[cmd.user.id],cmd.user.id),components:presets.menu,files:["./"+cmd.user.id+".png"]});},2000);
            }
        break;
        case 'edit-mii':
            if(storage[cmd.user.id]===undefined||storage[cmd.user.id]===null){
                cmd.reply({"ephemeral":true,content:"Whoops! You don't have a Mii to edit! Use /create-mii instead"});
                return;
            }
            await cmd.deferReply();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.editReply({content:getInfoText(storage[cmd.user.id],cmd.user.id),components:presets.menu,files:["./"+cmd.user.id+".png"]});},2000);
        break;
    }

    if(cmd.isButton()){
        if(!cmd.message.content.includes(cmd.user.id)){
            cmd.reply({"ephemeral":true,"content":"❌ Sorry! You didn't make this Mii! You can start your own with /create-mii or edit one you already started with /edit-mii"});
            return;
        }
        if(cmd.customId.startsWith("switch-")){
            cmd.update({components:presets[cmd.customId.split("switch-")[1]+"Page"]});
        }
        if(cmd.customId.startsWith("input-")){
            await cmd.showModal(presets[cmd.customId.split("input-")[1]]);
        }
        if(cmd.customId==="cancel"){
            cmd.update({components:presets.menu});
        }
        if(cmd.customId.endsWith("male")){
            storage[cmd.user.id].info.gender=cmd.customId==="male"?"Male":"Female";
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("color-")){
            storage[cmd.user.id].info.favColor=cmd.customId.split("color-")[1][0].toUpperCase()+cmd.customId.split("color-")[1].slice(1);
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("skin-")){
            var search=["White","Tanned White","Darker Skin","Tanned Darker","Mostly Black","Black"];
            search.forEach(s=>{
                if(s.toLowerCase().replaceAll(" ","-")===cmd.customId.split("skin-")[1]){
                    storage[cmd.user.id].face.col=s;
                    save();
                    var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
                    miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
                    setTimeout(()=>{
                        cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                        cmd.deferUpdate();
                    },2000);
                }
            });
        }
        if(cmd.customId.startsWith("shape-")){
            storage[cmd.user.id].face.shape=+cmd.customId.split("shape-")[1]-1;
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("feature-")){
            storage[cmd.user.id].face.feature=["None","Blush","Makeup and Blush","Freckles","Bags","Wrinkles on Cheeks","Wrinkles near Eyes","Chin Wrinkle","Makeup","Stubble","Wrinkles near Mouth","Wrinkles"][+cmd.customId.split("feature-")[1]];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("hairCol-")){
            var search=["Black","Brown","Red","Reddish Brown","Grey","Light Brown","Dark Blonde","Blonde"];
            search.forEach(s=>{
                if(s.toLowerCase().replaceAll(" ","-")===cmd.customId.split("hairCol-")[1]){
                    storage[cmd.user.id].hair.col=s;
                    save();
                    var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
                    miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
                    setTimeout(()=>{
                        cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                        cmd.deferUpdate();
                    },2000);
                }
            });
        }
        if(cmd.customId.startsWith("mole-")){
            if(/^(x|y|s)$/i.test(cmd.customId.split("mole-")[1])){
                cmd.showModal(presets["mole"+(cmd.customId.split("mole-")[1].toUpperCase())]);
            }
            else{
                storage[cmd.user.id].mole.on=!storage[cmd.user.id].mole.on;
                save();
                var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
                miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
                setTimeout(()=>{
                    cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                    cmd.deferUpdate();
                },2000);
            }
        }
        if(cmd.customId.startsWith("mouth-")){
            cmd.showModal(presets["mouth"+(cmd.customId.split("mouth-")[1].toUpperCase())]);
        }
        if(cmd.customId.startsWith("mouthCol-")){
            storage[cmd.user.id].mouth.col=cmd.customId.split("mouthCol-")[1][0].toUpperCase()+cmd.customId.split("mouthCol-")[1].slice(1);
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("mouthType-")){
            storage[cmd.user.id].mouth.type=cmd.customId.split("mouthType-")[1];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("nose-")){
            storage[cmd.user.id].nose.type=+cmd.customId.split("nose-")[1]-1;
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("noseYPos")||cmd.customId.startsWith("noseSize")){
            cmd.showModal(presets[cmd.customId]);
        }
        if(cmd.customId.startsWith("eyeCol-")){
            storage[cmd.user.id].eyes.col=cmd.customId.split("eyeCol-")[1][0].toUpperCase()+cmd.customId.split("eyeCol-")[1].slice(1);
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("eyeType-")){
            storage[cmd.user.id].eyes.type=cmd.customId.split("eyeType-")[1];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("glassesType")){
            storage[cmd.user.id].glasses.type=+cmd.customId.split("glassesType")[1];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId==="flip"){
            storage[cmd.user.id].hair.flipped=!storage[cmd.user.id].hair.flipped;
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("faceHairCol-")){
            var search=["Black","Brown","Red","Reddish Brown","Grey","Light Brown","Dark Blonde","Blonde"];
            search.forEach(s=>{
                if(s.toLowerCase().replaceAll(" ","-")===cmd.customId.split("faceHairCol-")[1]){
                    storage[cmd.user.id].facialHair.col=s;
                    save();
                    var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
                    miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
                    setTimeout(()=>{
                        cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                        cmd.deferUpdate();
                    },2000);
                }
            });
        }
        if(cmd.customId.startsWith("faceHairYPos")||cmd.customId.startsWith("faceHairSize")){
            cmd.showModal(presets[cmd.customId]);
        }
        if(cmd.customId==="reset"||cmd.customId==="height"||cmd.customId==="weight"){
            cmd.showModal(presets[cmd.customId]);
        }
        if(cmd.customId.startsWith("eyes-")){
           cmd.showModal(presets[cmd.customId]);
        }
        if(cmd.customId.startsWith("eyebrows-")){
           cmd.showModal(presets[cmd.customId]);
        }
        if(cmd.customId.startsWith("stache-")){
            storage[cmd.user.id].facialHair.mustacheType=+cmd.customId.split("stache-")[1];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("beard-")){
            storage[cmd.user.id].facialHair.beardType=+cmd.customId.split("beard-")[1];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("eyebrowsCol-")){
            var search=["Black","Brown","Red","Reddish Brown","Grey","Light Brown","Dark Blonde","Blonde"];
            search.forEach(s=>{
                if(s.toLowerCase().replaceAll(" ","-")===cmd.customId.split("eyebrowsCol-")[1]){
                    storage[cmd.user.id].eyebrows.col=s;
                    save();
                    var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
                    miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
                    setTimeout(()=>{
                        cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                        cmd.deferUpdate();
                    },2000);
                }
            });
        }
        if(cmd.customId.startsWith("export-")){
            if(cmd.customId.split("export-")[1]==="qr"){
                var temp=miijs.convertMii(storage[cmd.user.id],"wii");
                miijs.write3DSQR(temp,"./"+cmd.user.id+".png");
                setTimeout(()=>{
                    cmd.reply({"files":["./"+cmd.user.id+".png"],"ephemeral":true});
                },2000);
                return;
            }
            else{
                miijs.writeWiiBin(storage[cmd.user.id],"./temp.mii");
                cmd.reply({"files":["./temp.mii"],"ephemeral":true});
                return;
            }
        }
        if(cmd.customId.startsWith("glassesCol-")){
            storage[cmd.user.id].glasses.col=cmd.customId.split("glassesCol-")[1][0].toUpperCase()+cmd.customId.split("glassesCol-")[1].slice(1);
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("glasses-")){
            cmd.showModal(presets[cmd.customId]);
        }
        if(cmd.customId.startsWith("eyebrowsType-")){
            storage[cmd.user.id].eyebrows.type=cmd.customId.split("eyebrowsType-")[1];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId.startsWith("hairType-")){
            storage[cmd.user.id].hair.type=cmd.customId.split("hairType-")[1];
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{
                cmd.message.edit({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});
                cmd.deferUpdate();
            },2000);
        }
        if(cmd.customId==="confirmReset"){
            await cmd.deferUpdate();
            storage[cmd.user.id]=getClone(defaultMii);
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.editReply({content:getInfoText(storage[cmd.user.id],cmd.user.id),components:presets.menu,files:["./"+cmd.user.id+".png"]});},2000);
        }
        if(cmd.customId==="cancelReset"){
            cmd.deferUpdate();
            cmd.deleteReply();
        }
    }
    if(cmd.isModalSubmit()){
        if(cmd.customId==="inputtedName"){
            storage[cmd.user.id].info.name=cmd.fields.getTextInputValue("name");
            storage[cmd.user.id].name=storage[cmd.user.id].info.name;
        }
        if(cmd.customId==="inputtedBirthday"){
            var day=cmd.fields.getTextInputValue("birthday");
            var month=cmd.fields.getTextInputValue("birthmonth");
            if(!/^[0-9]+$/i.test(day)||!/^[0-9]+$/i.test(month)){
                cmd.deferUpdate();
                return;
            }
            day=+day;
            month=+month;
            var maxDays=[0,31,29,31,30,31,30,31,31,30,31,30,31];
            if(month>12||month<0||day<0||day===0&&month!==0||day>maxDays[month]){
                cmd.deferUpdate();
                return;
            }
            storage[cmd.user.id].info.birthday=day;
            storage[cmd.user.id].info.birthMonth=month;
        }
        if(cmd.customId==="resetMii"){
            if(cmd.fields.getTextInputValue("confirm").toLowerCase()==="y"){
                storage[cmd.user.id]=getClone(defaultMii);
                storage[cmd.user.id].creatorName=cmd.user.username;
                storage[cmd.user.id].info.creatorName=cmd.user.username;
                save();
                var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
                miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
                setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),components:presets.menu,files:["./"+cmd.user.id+".png"]});},2000);
            }
            else{
                cmd.deferUpdate();
            }
            return;
        }
        if(cmd.customId.startsWith("inputtedMole")){
            if(!/^[0-9]+$/i.test(cmd.fields.getTextInputValue("d"))){
                cmd.deferUpdate();
                return;
            }
            var d=+cmd.fields.getTextInputValue("d");
            switch(cmd.customId.split("inputtedMole")[1]){
                case 'XPos':
                    if(d>16||d<0){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].mole.xPos=d;
                break;
                case 'YPos':
                    if(d>30||d<0){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].mole.yPos=d;
                break;
                case 'Size':
                    if(d>8||d<0){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].mole.size=d;
                break;
            }
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        if(cmd.customId.startsWith("inputtedMouth")){
            if(!/^[0-9]+$/.test(cmd.fields.getTextInputValue("d"))){
                cmd.deferUpdate();
                return;
            }
            var d=+cmd.fields.getTextInputValue("d");
            if(cmd.customId.split("inputtedMouth")[1]==="YPos"){
                if(d<0||d>18){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].mouth.yPos=d;
            }
            else{
                if(d<0||d>8){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].mouth.size=d;
            }
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        if(cmd.customId.startsWith("inputtedNose")){
            if(!/^[0-9]+$/.test(cmd.fields.getTextInputValue("d"))){
                cmd.deferUpdate();
                return;
            }
            var d=+cmd.fields.getTextInputValue("d");
            if(cmd.customId.split("inputtedNose")[1]==="YPos"){
                if(d<0||d>18){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].nose.vertPos=d;
            }
            else{
                if(d<0||d>8){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].nose.size=d;
            }
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        if(cmd.customId.startsWith("inputtedEyes")){
            if(!/^[0-9]+$/i.test(cmd.fields.getTextInputValue("d"))){
                cmd.deferUpdate();
                return;
            }
            var d=+cmd.fields.getTextInputValue("d");
            switch(cmd.customId.split("inputtedEyes")[1]){
                case 'YPos':
                    if(d<0||d>18){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyes.yPos=d;
                break;
                case 'DistApart':
                    if(d<0||d>12){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyes.distApart=d;
                break;
                case 'Rot':
                    if(d<0||d>7){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyes.rotation=d;
                break;
                case 'Size':
                    if(d<0||d>7){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyes.size=d;
                break;
            }
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        if(cmd.customId.startsWith("inputtedEyebrows")){
            if(!/^[0-9]+$/i.test(cmd.fields.getTextInputValue("d"))){
                cmd.deferUpdate();
                return;
            }
            var d=+cmd.fields.getTextInputValue("d");
            switch(cmd.customId.split("inputtedEyebrows")[1]){
                case 'YPos':
                    if(d<3||d>18){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyebrows.yPos=d;
                break;
                case 'DistApart':
                    if(d<0||d>12){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyebrows.distApart=d;
                break;
                case 'Rot':
                    if(d<0||d>7){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyebrows.rotation=d;
                break;
                case 'Size':
                    if(d<0||d>8){
                        cmd.deferUpdate();
                        return;
                    }
                    storage[cmd.user.id].eyebrows.size=d;
                break;
            }
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        if(cmd.customId.startsWith("inputtedFaceHair")){
            if(!/^[0-9]+$/i.test(cmd.fields.getTextInputValue("d"))){
                cmd.deferUpdate();
                return;
            }
            var d=cmd.fields.getTextInputValue("d");
            if(cmd.customId.split("inputtedFaceHair")[1]==="YPos"){
                if(d<0||d>16){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].facialHair.mustacheYPos=d;
            }
            else{
                if(d<0||d>8){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].facialHair.mustacheSize=d;
            }
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        if(cmd.customId.startsWith("inputtedGlasses")){
            if(!/^[0-9]+$/i.test(cmd.fields.getTextInputValue("d"))){
                cmd.deferUpdate();
                return;
            }
            var d=cmd.fields.getTextInputValue("d");
            if(cmd.customId.split("inputtedGlasses")[1]==="YPos"){
                if(d<0||d>20){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].glasses.yPos=d;
            }
            else{
                if(d<0||d>7){
                    cmd.deferUpdate();
                    return;
                }
                storage[cmd.user.id].glasses.size=d;
            }
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        if(cmd.customId==="height"||cmd.customId==="weight"){
            if(!/^[0-9]+$/i.test(cmd.fields.getTextInputValue(cmd.customId))){
                cmd.deferUpdate();
                return;
            }
            var d=+cmd.fields.getTextInputValue(cmd.customId);
            if(d<0||d>127){
                cmd.deferUpdate();
                return;
            }
            storage[cmd.user.id].info[cmd.customId]=d;
            save();
            var picJson=miijs.convertMii(storage[cmd.user.id],"wii");
            miijs.render3DSMiiFromJSON(picJson,"./"+cmd.user.id+".png");
            setTimeout(()=>{cmd.update({content:getInfoText(storage[cmd.user.id],cmd.user.id),files:["./"+cmd.user.id+".png"]});},2000);
            return;
        }
        cmd.update(getInfoText(storage[cmd.user.id],cmd.user.id));
        save();
    }
});
client.login(process.env.token);