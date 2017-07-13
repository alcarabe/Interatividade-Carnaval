/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'inconsolata, sans-serif': '<script src=\"http://use.edgefonts.net/inconsolata:n5,n7:all.js\"></script>',
            'Roboto, sans-serif': '<link href=\'https://fonts.googleapis.com/css?family=Roboto\' rel=\'stylesheet\' type=\'text/css\'>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'MAPA__neutro__16x9',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            title: 'fundo-mapa-bsb',
                            fill: ["rgba(0,0,0,0)",im+"MAPA__neutro__16x9__HD__novo__NUCLEO_BANDEIRANTE.png",'0px','0px']
                        },
                        {
                            id: 'estand_ENCOSTA',
                            type: 'image',
                            rect: ['899px', '225px', '158px', '330px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__ENCOSTA_QUE_CRESCE.png",'0px','0px'],
                            transform: [[],['20'],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_DESENCAPADO',
                            type: 'image',
                            rect: ['734px', '-80px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__FIO_DESENCAPADO.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_DESODORANTE',
                            type: 'image',
                            rect: ['842px', '-44px', '168px', '259px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand_crop_DESODORANTE_DA_ASA.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_GALO_CEGO',
                            type: 'image',
                            rect: ['787px', '435px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__GALO_CEGO.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_LIBRE',
                            type: 'image',
                            rect: ['858px', '208px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__LIBRE.png",'0px','0px'],
                            transform: [[],['-20'],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_SAPEKAI',
                            type: 'image',
                            rect: ['265px', '601px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__SAPEKAI.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_TUTHANKASMONA',
                            type: 'image',
                            rect: ['899px', '481px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__TUTHANKASMONA.png",'0px','0px'],
                            transform: [[],['-6'],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_TRADICIONAIS',
                            type: 'image',
                            rect: ['1058px', '238px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__BLOCOS_TRADICIONAIS.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_GUGU_DADA',
                            type: 'image',
                            rect: ['105px', '601px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__GUGU_DADA.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_PELEJA',
                            type: 'image',
                            rect: ['1025px', '419px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__PELEJA.png",'0px','0px'],
                            transform: [[],['-20'],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_FALTA_POUCO',
                            type: 'image',
                            rect: ['1048px', '421px', '168px', '351px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand__FALTA_POUCO.png",'0px','0px'],
                            transform: [[],['20'],[],['1.5','1.5']]
                        },
                        {
                            id: 'estand_CAFUCU',
                            type: 'image',
                            rect: ['968px', '613px', '168px', '260px', 'auto', 'auto'],
                            title: 'estandarte-local',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"estand_crop__CAFUCU_DO_CERRADO.png",'0px','0px'],
                            transform: [[],[],[],['1.5','1.5']]
                        },
                        {
                            id: 'assinatura_globeleza',
                            display: 'block',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '1',
                            fill: ["rgba(0,0,0,0)",im+"assinatura%20globeleza.png",'0px','0px']
                        },
                        {
                            id: 'fundo_para_estandarte_carnaval',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            title: 'fundo para estandarte',
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"fundo%20para%20estandarte%20carnaval.png",'0px','0px'],
                            transform: [[],[],[],['1.75','1.75']]
                        },
                        {
                            id: 'bafo_bse',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"bafo%20bse.png",'0px','0px'],
                            transform: [[],[],[],['1.75','1.75']]
                        },
                        {
                            id: 'estandarte_torto_glow_CROP',
                            display: 'none',
                            type: 'image',
                            rect: ['437px', '1005px', '1162px', '1705px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"estandarte%20torto%20glow_CROP.png",'0px','0px']
                        },
                        {
                            id: 'TEXTO_encosta',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">encosta</p><p style=\"margin: 0px; text-align: center; line-height: 56px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 77px; text-transform: uppercase; font-family: Roboto, sans-serif; color: rgb(0, 0, 0);\">que cresce</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 47px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Funarte</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 120px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 14H</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 66px;\">LIVRE</p><p style=\"margin:0px\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"></p>",
                            font: ['inconsolata, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_tuthankasmona',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 62px; text-transform: uppercase; font-family: Roboto, sans-serif; color: rgb(0, 0, 0);\">tuthankasmona</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 89px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Teatro Nacional</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 91px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 16H</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 92px;\"><span style=\"font-size: 91px;\">LIVRE</span></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            textStyle: ["0px", "", "", "", ""],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_galo_cego',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">galo cego</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 68px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Setor Bancário Sul</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 96px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 13</span>H</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 88px;\">LIVRE</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_peleja',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">​peleja</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 81px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">201 norte</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 94px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 14h</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 92px;\">LIVRE</p><p style=\"margin:0px\">​</p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_libre',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">libre</p><p style=\"margin: 0px; text-align: center; line-height: 94px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Funarte</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 56px;\"><span style=\"color: rgb(0, 0, 0);\">DOMINGO 14H</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 146px;\">LIVRE</p><p style=\"margin:0px\">​</p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_gugu_dada',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">GUGÚ DADÁ</p><p style=\"margin: 0px; text-align: center; line-height: 84px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Núcleo Bandeirante</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 84px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 12H</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 128px;\">LIVRE</p><p style=\"margin:0px\">​</p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_sapekai',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">sapekaí</p><p style=\"margin: 0px; text-align: center; line-height: 84px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Núcleo Bandeirante</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 84px;\"><span style=\"color: rgb(0, 0, 0);\">DOMINGO 13H</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 128px;\">LIVRE</p><p style=\"margin: 0px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_desodorante',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">desodorante</p><p style=\"margin: 0px; text-align: center; line-height: 56px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 77px; text-transform: uppercase; font-family: Roboto, sans-serif; color: rgb(0, 0, 0);\">da asa</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 47px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Q.10 CRUZEIRO VELHO</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 120px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 9h</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 66px;\">LIVRE</p><p></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_desencapado',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">fio</p><p style=\"margin: 0px; text-align: center; line-height: 56px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 77px; text-transform: uppercase; font-family: Roboto, sans-serif; color: rgb(0, 0, 0);\">desencapado</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 52px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Setor de Oficinas &nbsp; do Sudoeste</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 120px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 17H</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 66px;\">LIVRE</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_tradicionais',
                            display: 'none',
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">blocos</p><p style=\"margin: 0px; text-align: center; line-height: 56px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 77px; text-transform: uppercase; font-family: Roboto, sans-serif; color: rgb(0, 0, 0);\">tradicionais</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 47px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">302/303 norte</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 120px;\"><span style=\"color: rgb(0, 0, 0);\">SÁBADO 16h</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 66px;\">LIVRE</p><p style=\"margin: 0px; font-family: inconsolata, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 65px;\"></span></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_falta_pouco',
                            display: 'none',
                            type: 'text',
                            rect: ['1039px', '1847px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">falta pouco</p><p style=\"margin: 0px; text-align: center; line-height: 84px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-indent: 0px;\"><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">201 norte</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 84px;\"><span style=\"color: rgb(0, 0, 0);\">DOMINGO 16h</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 128px;\">LIVRE</p><p style=\"margin: 0px; font-family: Tahoma, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 7px; color: rgb(0, 9, 77); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: start; text-indent: 0px; line-height: normal;\">​</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 65px;\"></span></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'TEXTO_cafucu',
                            display: 'none',
                            type: 'text',
                            rect: ['1039px', '1847px', '543px', '597px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">cafuçu</p><p style=\"margin: 0px; text-align: center; font-family: Roboto, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 77px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: uppercase; word-spacing: 0px; text-indent: 0px; line-height: normal;\">do cerrado</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 68px;\"><span style=\"color: rgb(0, 0, 0);\">​</span><span style=\"font-size: 57px; color: rgb(0, 0, 0);\">Setor Bancário Norte</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 96px;\"><span style=\"color: rgb(0, 0, 0);\">DOMINGO 15</span>h</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 91px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: 88px;\">LIVRE</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\"><span style=\"font-size: 65px;\"></span></p>",
                            font: ['Tahoma, Geneva, sans-serif', [7, "px"], "rgba(0,9,77,1.00)", "normal", "none", "", "break-word", "normal"],
                            transform: [[],['-3'],[],['1.10413','1.10414']]
                        },
                        {
                            id: 'volta_x',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['1816px', '977px', '71px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,91,244,1.00)"],
                            stroke: [3,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'volta_y',
                            display: 'none',
                            type: 'ellipse',
                            rect: ['28px', '977px', '71px', '68px', 'auto', 'auto'],
                            cursor: 'pointer',
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(0,91,244,1.00)"],
                            stroke: [3,"rgba(255,255,255,1.00)","solid"]
                        },
                        {
                            id: 'clicker_ENCOSTA',
                            display: 'none',
                            type: 'rect',
                            rect: ['961px', '333px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],['20'],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_TUTHANKASMONA',
                            display: 'none',
                            type: 'rect',
                            rect: ['47.5%', '54.4%', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],['-6'],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_GALO_CEGO',
                            display: 'none',
                            type: 'rect',
                            rect: ['811px', '540px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_PELEJA',
                            display: 'none',
                            type: 'rect',
                            rect: ['1007px', '533px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],['-20'],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_LIBRE',
                            display: 'none',
                            type: 'rect',
                            rect: ['840px', '321px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],['-20'],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_GUGU_DADA',
                            display: 'none',
                            type: 'rect',
                            rect: ['130px', '707px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_SAPEKAI',
                            display: 'none',
                            type: 'rect',
                            rect: ['290px', '707px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_DESODORANTE',
                            display: 'none',
                            type: 'rect',
                            rect: ['867px', '7px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_DESENCAPADO',
                            display: 'none',
                            type: 'rect',
                            rect: ['759px', '25px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_TRADICIONAIS',
                            display: 'none',
                            type: 'rect',
                            rect: ['1083px', '344px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_FALTA_POUCO',
                            display: 'none',
                            type: 'rect',
                            rect: ['1118px', '534px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],['20'],[],['0.75','0.75']]
                        },
                        {
                            id: 'clicker_CAFUCU',
                            display: 'none',
                            type: 'rect',
                            rect: ['994px', '693px', '112px', '165px', 'auto', 'auto'],
                            overflow: 'visible',
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,91,244,1)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.75','0.75']]
                        },
                        {
                            id: 'GLOBELEZA__fim',
                            display: 'none',
                            type: 'image',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"assinatura%20globeleza.png",'0px','0px']
                        },
                        {
                            id: 'CHAMA_ass_final_DIR',
                            type: 'ellipse',
                            rect: ['1827px', '515px', '83px', '82px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(244,0,0,1.00)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.4','0.4']]
                        },
                        {
                            id: 'CHAMA_ass_final_ESQ',
                            type: 'ellipse',
                            rect: ['6px', '515px', '83px', '82px', 'auto', 'auto'],
                            borderRadius: ["50%", "50%", "50%", "50%"],
                            opacity: '0',
                            fill: ["rgba(244,0,0,1.00)"],
                            stroke: [3,"rgb(255, 255, 255)","solid"],
                            transform: [[],[],[],['0.4','0.4']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1920px', '1080px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 24500,
                    autoPlay: false,
                    labels: {
                        "INICIO": 0,
                        "FIM ESTANDARTES": 2750,
                        "IN 1": 3000,
                        "STAY 1": 4000,
                        "OUT 1": 4500,
                        "IN 2": 4750,
                        "STAY 2": 5750,
                        "OUT 2": 6250,
                        "IN 3": 6500,
                        "STAY 3": 7500,
                        "OUT 3": 8000,
                        "IN 4": 8250,
                        "STAY 4": 9250,
                        "OUT 4": 9750,
                        "IN 5": 10000,
                        "STAY 5": 11000,
                        "OUT 5": 11500,
                        "IN 6": 11750,
                        "STAY 6": 12750,
                        "OUT 6": 13250,
                        "IN 7": 13500,
                        "STAY 7": 14500,
                        "OUT 7": 15000,
                        "IN 8": 15250,
                        "STAY 8": 16250,
                        "OUT 8": 16750,
                        "IN 9": 17000,
                        "STAY 9": 18000,
                        "OUT 9": 18500,
                        "IN 10": 18750,
                        "STAY 10": 19750,
                        "OUT 10": 20250,
                        "IN 11": 20500,
                        "STAY 11": 21500,
                        "OUT 11": 22000,
                        "IN 12": 22250,
                        "STAY 12": 23250,
                        "OUT 12": 23750,
                        "ASSINATURA FINAL": 24000
                    },
                    data: [
                        [
                            "eid14558",
                            "scaleX",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid4212",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_desencapado}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4225",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_desencapado}",
                            'none',
                            'block'
                        ],
                        [
                            "eid185",
                            "scaleY",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid186",
                            "scaleX",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid4221",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4234",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13165",
                            "display",
                            4500,
                            0,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13166",
                            "display",
                            4750,
                            0,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            'none',
                            'block'
                        ],
                        [
                            "eid13167",
                            "display",
                            6250,
                            0,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13168",
                            "display",
                            6500,
                            0,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16593",
                            "-webkit-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19197",
                            "-moz-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19198",
                            "-ms-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19199",
                            "msTransformOrigin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19200",
                            "-o-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19201",
                            "transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3656",
                            "location",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_desencapado}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3657",
                            "location",
                            18000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_desencapado}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid4219",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_tuthankasmona}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4232",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_tuthankasmona}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18084",
                            "left",
                            23750,
                            0,
                            "linear",
                            "${clicker_TUTHANKASMONA}",
                            '47.45%',
                            '47.45%'
                        ],
                        [
                            "eid4222",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4235",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7180",
                            "display",
                            0,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6760",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6761",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6762",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6763",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6764",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6765",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6766",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6767",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6768",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6769",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6770",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6771",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6772",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6773",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6774",
                            "display",
                            15750,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6775",
                            "display",
                            16750,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6776",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6777",
                            "display",
                            18500,
                            0,
                            "linear",
                            "${volta_x}",
                            'block',
                            'none'
                        ],
                        [
                            "eid6778",
                            "display",
                            19250,
                            0,
                            "linear",
                            "${volta_x}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2420",
                            "scaleY",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid179",
                            "opacity",
                            725,
                            750,
                            "linear",
                            "${estand_DESODORANTE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2429",
                            "scaleX",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid18081",
                            "rotateZ",
                            23750,
                            0,
                            "linear",
                            "${clicker_TUTHANKASMONA}",
                            '-6deg',
                            '-6deg'
                        ],
                        [
                            "eid10789",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_GUGU_DADA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid3356",
                            "location",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038, 1857.21, 0, 0, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.91]]
                        ],
                        [
                            "eid3409",
                            "location",
                            4000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13148",
                            "location",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038.03, 1858, -60.95, -979.32, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1288.7]]
                        ],
                        [
                            "eid3517",
                            "location",
                            5750,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13161",
                            "location",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038.03, 1858, -60.95, -979.32, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1288.7]]
                        ],
                        [
                            "eid3531",
                            "location",
                            7500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13369",
                            "location",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1037.61, 1857.08, -71.08, -1142.02, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.75]]
                        ],
                        [
                            "eid3545",
                            "location",
                            9250,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13376",
                            "location",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1037.77, 1857.17, -70.74, -1136.68, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.85]]
                        ],
                        [
                            "eid3559",
                            "location",
                            11000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13383",
                            "location",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038.37, 1857.7, -69.92, -1123.47, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1288.42]]
                        ],
                        [
                            "eid3573",
                            "location",
                            12750,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13490",
                            "location",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1037.52, 1857.08, -68.36, -1098.34, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.75]]
                        ],
                        [
                            "eid3587",
                            "location",
                            14500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid3600",
                            "location",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038, 1857.21, 0, 0, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.91]]
                        ],
                        [
                            "eid3601",
                            "location",
                            16250,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13503",
                            "location",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038.03, 1858, -60.95, -979.32, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1288.7]]
                        ],
                        [
                            "eid3615",
                            "location",
                            18000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid13510",
                            "location",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038.36, 1857.09, -53.13, -853.65, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.81]]
                        ],
                        [
                            "eid3629",
                            "location",
                            19750,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid14814",
                            "location",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038.36, 1857.09, -53.13, -853.65, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.81]]
                        ],
                        [
                            "eid14815",
                            "location",
                            21500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid17063",
                            "location",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1038.36, 1857.09, -53.13, -853.65, 0, 0,0],[958, 571.79, 0, 0, 0, 0,1287.81]]
                        ],
                        [
                            "eid17064",
                            "location",
                            23250,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[958, 571.79, 0, 0, 0, 0,0],[1038, 1857.2, 0, 0, 0, 0,1287.9]]
                        ],
                        [
                            "eid16859",
                            "display",
                            3500,
                            0,
                            "easeOutCubic",
                            "${TEXTO_cafucu}",
                            'none',
                            'none'
                        ],
                        [
                            "eid16860",
                            "display",
                            6500,
                            0,
                            "easeOutCubic",
                            "${TEXTO_cafucu}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10792",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_DESENCAPADO}",
                            'block',
                            'block'
                        ],
                        [
                            "eid18091",
                            "left",
                            23750,
                            0,
                            "linear",
                            "${clicker_PELEJA}",
                            '1007px',
                            '1007px'
                        ],
                        [
                            "eid18086",
                            "rotateZ",
                            23750,
                            0,
                            "linear",
                            "${clicker_PELEJA}",
                            '-20deg',
                            '-20deg'
                        ],
                        [
                            "eid6137",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6138",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6139",
                            "opacity",
                            5250,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6140",
                            "opacity",
                            5750,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6141",
                            "opacity",
                            7000,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6142",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6143",
                            "opacity",
                            8750,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6144",
                            "opacity",
                            9250,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6145",
                            "opacity",
                            10500,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6146",
                            "opacity",
                            11000,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6147",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6148",
                            "opacity",
                            12750,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6149",
                            "opacity",
                            14000,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6150",
                            "opacity",
                            14500,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6151",
                            "opacity",
                            15750,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6152",
                            "opacity",
                            16250,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6153",
                            "opacity",
                            17500,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6154",
                            "opacity",
                            18000,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid6155",
                            "opacity",
                            19250,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid6156",
                            "opacity",
                            19750,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14748",
                            "opacity",
                            21000,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.2'
                        ],
                        [
                            "eid14749",
                            "opacity",
                            21500,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.20000000298023224',
                            '0'
                        ],
                        [
                            "eid16928",
                            "opacity",
                            22750,
                            500,
                            "linear",
                            "${volta_x}",
                            '0',
                            '0.2'
                        ],
                        [
                            "eid16929",
                            "opacity",
                            23250,
                            500,
                            "linear",
                            "${volta_x}",
                            '0.20000000298023224',
                            '0'
                        ],
                        [
                            "eid14560",
                            "scaleY",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid14810",
                            "display",
                            1750,
                            0,
                            "easeOutCubic",
                            "${TEXTO_falta_pouco}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14811",
                            "display",
                            4750,
                            0,
                            "easeOutCubic",
                            "${TEXTO_falta_pouco}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10793",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_TRADICIONAIS}",
                            'block',
                            'block'
                        ],
                        [
                            "eid178",
                            "scaleX",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid2422",
                            "scaleX",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid34",
                            "scaleY",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid10790",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_SAPEKAI}",
                            'block',
                            'block'
                        ],
                        [
                            "eid30",
                            "-webkit-transform-origin",
                            500,
                            814,
                            "easeOutCubic",
                            "${estand_ENCOSTA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19202",
                            "-moz-transform-origin",
                            500,
                            814,
                            "easeOutCubic",
                            "${estand_ENCOSTA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19203",
                            "-ms-transform-origin",
                            500,
                            814,
                            "easeOutCubic",
                            "${estand_ENCOSTA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19204",
                            "msTransformOrigin",
                            500,
                            814,
                            "easeOutCubic",
                            "${estand_ENCOSTA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19205",
                            "-o-transform-origin",
                            500,
                            814,
                            "easeOutCubic",
                            "${estand_ENCOSTA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19206",
                            "transform-origin",
                            500,
                            814,
                            "easeOutCubic",
                            "${estand_ENCOSTA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14557",
                            "-webkit-transform-origin",
                            1314,
                            186,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            [50,91],
                            [50,93],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19207",
                            "-moz-transform-origin",
                            1314,
                            186,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            [50,91],
                            [50,93],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19208",
                            "-ms-transform-origin",
                            1314,
                            186,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            [50,91],
                            [50,93],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19209",
                            "msTransformOrigin",
                            1314,
                            186,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            [50,91],
                            [50,93],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19210",
                            "-o-transform-origin",
                            1314,
                            186,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            [50,91],
                            [50,93],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19211",
                            "transform-origin",
                            1314,
                            186,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            [50,91],
                            [50,93],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid26",
                            "scaleY",
                            500,
                            1000,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid3650",
                            "location",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_gugu_dada}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3651",
                            "location",
                            12750,
                            500,
                            "easeOutCubic",
                            "${TEXTO_gugu_dada}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid16595",
                            "scaleY",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid2425",
                            "-webkit-transform-origin",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19212",
                            "-moz-transform-origin",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19213",
                            "-ms-transform-origin",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19214",
                            "msTransformOrigin",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19215",
                            "-o-transform-origin",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19216",
                            "transform-origin",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14367",
                            "display",
                            0,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14368",
                            "display",
                            3500,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14369",
                            "display",
                            4500,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14370",
                            "display",
                            5250,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14371",
                            "display",
                            6250,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14372",
                            "display",
                            7000,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14373",
                            "display",
                            8000,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14374",
                            "display",
                            8750,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14375",
                            "display",
                            9750,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14376",
                            "display",
                            10500,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14377",
                            "display",
                            11500,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14378",
                            "display",
                            12250,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14379",
                            "display",
                            13250,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14380",
                            "display",
                            14000,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14381",
                            "display",
                            15000,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14382",
                            "display",
                            15750,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14383",
                            "display",
                            16750,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14384",
                            "display",
                            17500,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14385",
                            "display",
                            18500,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14386",
                            "display",
                            19250,
                            0,
                            "linear",
                            "${volta_y}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14683",
                            "display",
                            21000,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'block'
                        ],
                        [
                            "eid16861",
                            "display",
                            22750,
                            0,
                            "linear",
                            "${volta_y}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2419",
                            "opacity",
                            1130,
                            750,
                            "linear",
                            "${estand_SAPEKAI}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2431",
                            "opacity",
                            1500,
                            750,
                            "linear",
                            "${estand_GUGU_DADA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4211",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_tradicionais}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4224",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_tradicionais}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17746",
                            "left",
                            23750,
                            0,
                            "linear",
                            "${clicker_GUGU_DADA}",
                            '130px',
                            '130px'
                        ],
                        [
                            "eid9935",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_TUTHANKASMONA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid17742",
                            "left",
                            23750,
                            0,
                            "linear",
                            "${estand_GUGU_DADA}",
                            '105px',
                            '105px'
                        ],
                        [
                            "eid2427",
                            "opacity",
                            1380,
                            750,
                            "linear",
                            "${estand_TRADICIONAIS}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17743",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${estand_GUGU_DADA}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid195",
                            "opacity",
                            1000,
                            750,
                            "linear",
                            "${estand_LIBRE}",
                            '0',
                            '1'
                        ],
                        [
                            "eid2887",
                            "scaleY",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid2426",
                            "-webkit-transform-origin",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19217",
                            "-moz-transform-origin",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19218",
                            "-ms-transform-origin",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19219",
                            "msTransformOrigin",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19220",
                            "-o-transform-origin",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19221",
                            "transform-origin",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid15260",
                            "display",
                            24000,
                            0,
                            "linear",
                            "${GLOBELEZA__fim}",
                            'none',
                            'block'
                        ],
                        [
                            "eid17752",
                            "left",
                            23750,
                            0,
                            "linear",
                            "${estand_SAPEKAI}",
                            '265px',
                            '265px'
                        ],
                        [
                            "eid2423",
                            "opacity",
                            1250,
                            750,
                            "linear",
                            "${estand_TUTHANKASMONA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3352",
                            "scaleX",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3410",
                            "scaleX",
                            4000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3518",
                            "scaleX",
                            4500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13155",
                            "scaleX",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3519",
                            "scaleX",
                            5750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3532",
                            "scaleX",
                            6250,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13158",
                            "scaleX",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3533",
                            "scaleX",
                            7500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3546",
                            "scaleX",
                            8000,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13370",
                            "scaleX",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3547",
                            "scaleX",
                            9250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3560",
                            "scaleX",
                            9750,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13377",
                            "scaleX",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3561",
                            "scaleX",
                            11000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3574",
                            "scaleX",
                            11500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13384",
                            "scaleX",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3575",
                            "scaleX",
                            12750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3588",
                            "scaleX",
                            13250,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13491",
                            "scaleX",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3589",
                            "scaleX",
                            14500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3602",
                            "scaleX",
                            15000,
                            0,
                            "linear",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13497",
                            "scaleX",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3603",
                            "scaleX",
                            16250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3616",
                            "scaleX",
                            16750,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13504",
                            "scaleX",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3617",
                            "scaleX",
                            18000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3630",
                            "scaleX",
                            18500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13511",
                            "scaleX",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3631",
                            "scaleX",
                            19750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid14943",
                            "scaleX",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid14945",
                            "scaleX",
                            21500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid17072",
                            "scaleX",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid17075",
                            "scaleX",
                            23250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid2888",
                            "-webkit-transform-origin",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19222",
                            "-moz-transform-origin",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19223",
                            "-ms-transform-origin",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19224",
                            "msTransformOrigin",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19225",
                            "-o-transform-origin",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19226",
                            "transform-origin",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid18085",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${clicker_TUTHANKASMONA}",
                            '54.44%',
                            '54.44%'
                        ],
                        [
                            "eid176",
                            "-webkit-transform-origin",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            [50,150],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19227",
                            "-moz-transform-origin",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            [50,150],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19228",
                            "-ms-transform-origin",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            [50,150],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19229",
                            "msTransformOrigin",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            [50,150],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19230",
                            "-o-transform-origin",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            [50,150],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19231",
                            "transform-origin",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            [50,150],
                            [50,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid17747",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${clicker_GUGU_DADA}",
                            '707px',
                            '707px'
                        ],
                        [
                            "eid653",
                            "display",
                            500,
                            0,
                            "linear",
                            "${assinatura_globeleza}",
                            'block',
                            'none'
                        ],
                        [
                            "eid14561",
                            "-webkit-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19232",
                            "-moz-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19233",
                            "-ms-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19234",
                            "msTransformOrigin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19235",
                            "-o-transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19236",
                            "transform-origin",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_FALTA_POUCO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid3298",
                            "scaleY",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3414",
                            "scaleY",
                            4000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3528",
                            "scaleY",
                            4500,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13153",
                            "scaleY",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3529",
                            "scaleY",
                            5750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3542",
                            "scaleY",
                            6250,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13163",
                            "scaleY",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3543",
                            "scaleY",
                            7500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3556",
                            "scaleY",
                            8000,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13374",
                            "scaleY",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3557",
                            "scaleY",
                            9250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3570",
                            "scaleY",
                            9750,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13381",
                            "scaleY",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3571",
                            "scaleY",
                            11000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3584",
                            "scaleY",
                            11500,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13388",
                            "scaleY",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3585",
                            "scaleY",
                            12750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3598",
                            "scaleY",
                            13250,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13495",
                            "scaleY",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3599",
                            "scaleY",
                            14500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3612",
                            "scaleY",
                            15000,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13501",
                            "scaleY",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3613",
                            "scaleY",
                            16250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3626",
                            "scaleY",
                            16750,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13508",
                            "scaleY",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3627",
                            "scaleY",
                            18000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3640",
                            "scaleY",
                            18500,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13515",
                            "scaleY",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3641",
                            "scaleY",
                            19750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid14956",
                            "scaleY",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid14959",
                            "scaleY",
                            21500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid17215",
                            "scaleY",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid17218",
                            "scaleY",
                            23250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid2430",
                            "-webkit-transform-origin",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19237",
                            "-moz-transform-origin",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19238",
                            "-ms-transform-origin",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19239",
                            "msTransformOrigin",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19240",
                            "-o-transform-origin",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19241",
                            "transform-origin",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid187",
                            "opacity",
                            865,
                            750,
                            "linear",
                            "${estand_GALO_CEGO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17753",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${estand_SAPEKAI}",
                            '601px',
                            '601px'
                        ],
                        [
                            "eid3350",
                            "opacity",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3412",
                            "opacity",
                            4000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3520",
                            "opacity",
                            4500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13157",
                            "opacity",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3521",
                            "opacity",
                            5750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3534",
                            "opacity",
                            6250,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13160",
                            "opacity",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3535",
                            "opacity",
                            7500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3548",
                            "opacity",
                            8000,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13372",
                            "opacity",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3549",
                            "opacity",
                            9250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3562",
                            "opacity",
                            9750,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13379",
                            "opacity",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3563",
                            "opacity",
                            11000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3576",
                            "opacity",
                            11500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13386",
                            "opacity",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3577",
                            "opacity",
                            12750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3590",
                            "opacity",
                            13250,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13493",
                            "opacity",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3591",
                            "opacity",
                            14500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3604",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13499",
                            "opacity",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3605",
                            "opacity",
                            16250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3618",
                            "opacity",
                            16750,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13506",
                            "opacity",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3619",
                            "opacity",
                            18000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3632",
                            "opacity",
                            18500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13513",
                            "opacity",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid3633",
                            "opacity",
                            19750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid14942",
                            "opacity",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid14947",
                            "opacity",
                            21500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid17071",
                            "opacity",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.75'
                        ],
                        [
                            "eid17074",
                            "opacity",
                            23250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.75',
                            '0'
                        ],
                        [
                            "eid3652",
                            "location",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_sapekai}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3653",
                            "location",
                            14500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_sapekai}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid17741",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${estand_CAFUCU}",
                            '613px',
                            '613px'
                        ],
                        [
                            "eid3654",
                            "location",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_desodorante}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3655",
                            "location",
                            16250,
                            500,
                            "easeOutCubic",
                            "${TEXTO_desodorante}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid10787",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_PELEJA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2418",
                            "scaleX",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid16594",
                            "opacity",
                            1750,
                            750,
                            "linear",
                            "${estand_CAFUCU}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10791",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_DESODORANTE}",
                            'block',
                            'block'
                        ],
                        [
                            "eid3296",
                            "scaleX",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3413",
                            "scaleX",
                            4000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3524",
                            "scaleX",
                            4500,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13152",
                            "scaleX",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3525",
                            "scaleX",
                            5750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3538",
                            "scaleX",
                            6250,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13162",
                            "scaleX",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3539",
                            "scaleX",
                            7500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3552",
                            "scaleX",
                            8000,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13373",
                            "scaleX",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3553",
                            "scaleX",
                            9250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3566",
                            "scaleX",
                            9750,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13380",
                            "scaleX",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3567",
                            "scaleX",
                            11000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3580",
                            "scaleX",
                            11500,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13387",
                            "scaleX",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3581",
                            "scaleX",
                            12750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3594",
                            "scaleX",
                            13250,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13496",
                            "scaleX",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3595",
                            "scaleX",
                            14500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3608",
                            "scaleX",
                            15000,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13500",
                            "scaleX",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3609",
                            "scaleX",
                            16250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3622",
                            "scaleX",
                            16750,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13507",
                            "scaleX",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3623",
                            "scaleX",
                            18000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3636",
                            "scaleX",
                            18500,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13514",
                            "scaleX",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3637",
                            "scaleX",
                            19750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid14955",
                            "scaleX",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid14958",
                            "scaleX",
                            21500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid17214",
                            "scaleX",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid17217",
                            "scaleX",
                            23250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid14559",
                            "opacity",
                            1750,
                            750,
                            "linear",
                            "${estand_FALTA_POUCO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid28",
                            "opacity",
                            500,
                            750,
                            "linear",
                            "${estand_ENCOSTA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid4220",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_encosta}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4233",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_encosta}",
                            'none',
                            'block'
                        ],
                        [
                            "eid502",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${assinatura_globeleza}",
                            '1',
                            '0'
                        ],
                        [
                            "eid4214",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_sapekai}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4227",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_sapekai}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16857",
                            "location",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_cafucu}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid16858",
                            "location",
                            23250,
                            500,
                            "easeOutCubic",
                            "${TEXTO_cafucu}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid3644",
                            "location",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_galo_cego}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3645",
                            "location",
                            7500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_galo_cego}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid3357",
                            "location",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_encosta}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3358",
                            "location",
                            4000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_encosta}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid17755",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${clicker_SAPEKAI}",
                            '707px',
                            '707px'
                        ],
                        [
                            "eid4218",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_galo_cego}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4231",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_galo_cego}",
                            'none',
                            'block'
                        ],
                        [
                            "eid9634",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_ENCOSTA}",
                            'block',
                            'block'
                        ],
                        [
                            "eid3642",
                            "location",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_tuthankasmona}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3643",
                            "location",
                            5750,
                            500,
                            "easeOutCubic",
                            "${TEXTO_tuthankasmona}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid197",
                            "-webkit-transform-origin",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19242",
                            "-moz-transform-origin",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19243",
                            "-ms-transform-origin",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19244",
                            "msTransformOrigin",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19245",
                            "-o-transform-origin",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19246",
                            "transform-origin",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14562",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_FALTA_POUCO}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2424",
                            "scaleY",
                            1250,
                            1000,
                            "easeOutBounce",
                            "${estand_TUTHANKASMONA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid3646",
                            "location",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_peleja}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3647",
                            "location",
                            9250,
                            500,
                            "easeOutCubic",
                            "${TEXTO_peleja}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid3294",
                            "opacity",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3415",
                            "opacity",
                            4000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3526",
                            "opacity",
                            4500,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13154",
                            "opacity",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3527",
                            "opacity",
                            5750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3540",
                            "opacity",
                            6250,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13164",
                            "opacity",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3541",
                            "opacity",
                            7500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3554",
                            "opacity",
                            8000,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13375",
                            "opacity",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3555",
                            "opacity",
                            9250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3568",
                            "opacity",
                            9750,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13382",
                            "opacity",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3569",
                            "opacity",
                            11000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3582",
                            "opacity",
                            11500,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13389",
                            "opacity",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3583",
                            "opacity",
                            12750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3596",
                            "opacity",
                            13250,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13494",
                            "opacity",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3597",
                            "opacity",
                            14500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3610",
                            "opacity",
                            15000,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13502",
                            "opacity",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3611",
                            "opacity",
                            16250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3624",
                            "opacity",
                            16750,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13509",
                            "opacity",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3625",
                            "opacity",
                            18000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid3638",
                            "opacity",
                            18500,
                            0,
                            "linear",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '0'
                        ],
                        [
                            "eid13516",
                            "opacity",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid3639",
                            "opacity",
                            19750,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid14954",
                            "opacity",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid14957",
                            "opacity",
                            21500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid17213",
                            "opacity",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid17216",
                            "opacity",
                            23250,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid2421",
                            "-webkit-transform-origin",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19247",
                            "-moz-transform-origin",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19248",
                            "-ms-transform-origin",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19249",
                            "msTransformOrigin",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19250",
                            "-o-transform-origin",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19251",
                            "transform-origin",
                            1130,
                            1000,
                            "easeOutBounce",
                            "${estand_SAPEKAI}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid16592",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_CAFUCU}",
                            'block',
                            'block'
                        ],
                        [
                            "eid15809",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${CHAMA_ass_final_ESQ}",
                            '0',
                            '0.500000'
                        ],
                        [
                            "eid15810",
                            "opacity",
                            24000,
                            500,
                            "linear",
                            "${CHAMA_ass_final_ESQ}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid17754",
                            "left",
                            23750,
                            0,
                            "linear",
                            "${clicker_SAPEKAI}",
                            '290px',
                            '290px'
                        ],
                        [
                            "eid18089",
                            "top",
                            23750,
                            0,
                            "linear",
                            "${clicker_PELEJA}",
                            '533px',
                            '533px'
                        ],
                        [
                            "eid194",
                            "scaleX",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid14387",
                            "opacity",
                            3500,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14388",
                            "opacity",
                            4000,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14389",
                            "opacity",
                            5250,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14390",
                            "opacity",
                            5750,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14391",
                            "opacity",
                            7000,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14392",
                            "opacity",
                            7500,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14393",
                            "opacity",
                            8750,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14394",
                            "opacity",
                            9250,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14395",
                            "opacity",
                            10500,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14396",
                            "opacity",
                            11000,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14397",
                            "opacity",
                            12250,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14398",
                            "opacity",
                            12750,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14399",
                            "opacity",
                            14000,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14400",
                            "opacity",
                            14500,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14401",
                            "opacity",
                            15750,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14402",
                            "opacity",
                            16250,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14403",
                            "opacity",
                            17500,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14404",
                            "opacity",
                            18000,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14405",
                            "opacity",
                            19250,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14406",
                            "opacity",
                            19750,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid14684",
                            "opacity",
                            21000,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid14685",
                            "opacity",
                            21500,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid16862",
                            "opacity",
                            22750,
                            500,
                            "linear",
                            "${volta_y}",
                            '0',
                            '0.20000000298023224'
                        ],
                        [
                            "eid16863",
                            "opacity",
                            23250,
                            500,
                            "linear",
                            "${volta_y}",
                            '0.200000',
                            '0'
                        ],
                        [
                            "eid193",
                            "scaleY",
                            1000,
                            1000,
                            "easeOutBounce",
                            "${estand_LIBRE}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid3648",
                            "location",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_libre}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3649",
                            "location",
                            11000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_libre}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid16596",
                            "scaleX",
                            1750,
                            1000,
                            "easeOutBounce",
                            "${estand_CAFUCU}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid15262",
                            "opacity",
                            24000,
                            500,
                            "linear",
                            "${GLOBELEZA__fim}",
                            '0',
                            '1'
                        ],
                        [
                            "eid189",
                            "-webkit-transform-origin",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19252",
                            "-moz-transform-origin",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19253",
                            "-ms-transform-origin",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19254",
                            "msTransformOrigin",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19255",
                            "-o-transform-origin",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19256",
                            "transform-origin",
                            865,
                            1000,
                            "easeOutBounce",
                            "${estand_GALO_CEGO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2886",
                            "opacity",
                            1620,
                            750,
                            "linear",
                            "${estand_PELEJA}",
                            '0',
                            '1'
                        ],
                        [
                            "eid10788",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_LIBRE}",
                            'block',
                            'block'
                        ],
                        [
                            "eid2433",
                            "scaleX",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid10786",
                            "display",
                            2500,
                            0,
                            "linear",
                            "${clicker_GALO_CEGO}",
                            'block',
                            'block'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            500,
                            1000,
                            "easeOutBounce",
                            "${estand_ENCOSTA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid33",
                            "-webkit-transform-origin",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19257",
                            "-moz-transform-origin",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19258",
                            "-ms-transform-origin",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19259",
                            "msTransformOrigin",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19260",
                            "-o-transform-origin",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid19261",
                            "transform-origin",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            [50,150],
                            [50,91],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid2432",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutBounce",
                            "${estand_GUGU_DADA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid2428",
                            "scaleY",
                            1380,
                            1000,
                            "easeOutBounce",
                            "${estand_TRADICIONAIS}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid4217",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_peleja}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4230",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_peleja}",
                            'none',
                            'block'
                        ],
                        [
                            "eid35",
                            "scaleX",
                            605,
                            1000,
                            "easeOutBounce",
                            "${estand_DESENCAPADO}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid3354",
                            "scaleY",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3411",
                            "scaleY",
                            4000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3522",
                            "scaleY",
                            4500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13156",
                            "scaleY",
                            4750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3523",
                            "scaleY",
                            5750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3536",
                            "scaleY",
                            6250,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13159",
                            "scaleY",
                            6500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3537",
                            "scaleY",
                            7500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3550",
                            "scaleY",
                            8000,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13371",
                            "scaleY",
                            8250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3551",
                            "scaleY",
                            9250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3564",
                            "scaleY",
                            9750,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13378",
                            "scaleY",
                            10000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3565",
                            "scaleY",
                            11000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3578",
                            "scaleY",
                            11500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13385",
                            "scaleY",
                            11750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3579",
                            "scaleY",
                            12750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3592",
                            "scaleY",
                            13250,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13492",
                            "scaleY",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3593",
                            "scaleY",
                            14500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3606",
                            "scaleY",
                            15000,
                            0,
                            "linear",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13498",
                            "scaleY",
                            15250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3607",
                            "scaleY",
                            16250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3620",
                            "scaleY",
                            16750,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13505",
                            "scaleY",
                            17000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3621",
                            "scaleY",
                            18000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3634",
                            "scaleY",
                            18500,
                            0,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1.75'
                        ],
                        [
                            "eid13512",
                            "scaleY",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid3635",
                            "scaleY",
                            19750,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid14944",
                            "scaleY",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid14946",
                            "scaleY",
                            21500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid17073",
                            "scaleY",
                            22250,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid17076",
                            "scaleY",
                            23250,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid3658",
                            "location",
                            18750,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_tradicionais}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid3659",
                            "location",
                            19750,
                            500,
                            "easeOutCubic",
                            "${TEXTO_tradicionais}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid14812",
                            "location",
                            20500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_falta_pouco}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid14813",
                            "location",
                            21500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_falta_pouco}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid177",
                            "scaleY",
                            725,
                            1000,
                            "easeOutBounce",
                            "${estand_DESODORANTE}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid4213",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_desodorante}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4226",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_desodorante}",
                            'none',
                            'block'
                        ],
                        [
                            "eid2885",
                            "scaleX",
                            1620,
                            1000,
                            "easeOutBounce",
                            "${estand_PELEJA}",
                            '1.5',
                            '0.75'
                        ],
                        [
                            "eid4216",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_libre}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4229",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_libre}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4210",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4223",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "opacity",
                            605,
                            750,
                            "linear",
                            "${estand_DESENCAPADO}",
                            '0',
                            '1'
                        ],
                        [
                            "eid15748",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${CHAMA_ass_final_DIR}",
                            '0',
                            '0.500000'
                        ],
                        [
                            "eid15265",
                            "opacity",
                            24000,
                            500,
                            "linear",
                            "${CHAMA_ass_final_DIR}",
                            '0.5',
                            '0'
                        ],
                        [
                            "eid4215",
                            "display",
                            0,
                            0,
                            "easeOutCubic",
                            "${TEXTO_gugu_dada}",
                            'none',
                            'none'
                        ],
                        [
                            "eid4228",
                            "display",
                            3000,
                            0,
                            "easeOutCubic",
                            "${TEXTO_gugu_dada}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "estandarte-gif": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '207px', '503px', 'auto', 'auto'],
                            title: 'gif-estandarte',
                            overflow: 'hidden',
                            id: 'ANIMA_estandarte_022',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ANIMA_estandarte_022.gif', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '207px', '503px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "infos_NAO_VALE": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.75', '1.75']],
                            title: 'fundo-detalhes',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            id: 'fundo_para_estandarte_carnaval',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/fundo%20para%20estandarte%20carnaval.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'bafo_bse',
                            opacity: '0.8',
                            rect: ['0px', '0px', '1920px', '1080px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/bafo%20bse.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            title: 'estandarte-glow',
                            id: 'estandarte_torto_glow_CROP',
                            rect: ['444px', '869px', '1162px', '1705px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/estandarte%20torto%20glow_CROP.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['771px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_1',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_2',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_3',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_4',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_5',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_6',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_7',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_8',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_9',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        },
                        {
                            type: 'text',
                            rect: ['767px', '1548px', '543px', '597px', 'auto', 'auto'],
                            id: 'TEXTO_BLOCO_10',
                            text: '<p style=\"margin: 0px; text-align: center;\">​<span style=\"font-size: 72px;\">INFO BLOCO 1</span></p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p><p style=\"margin: 0px; font-family: Arial, Helvetica, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 72px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px; text-align: center; text-indent: 0px; line-height: normal;\">INFO BLOCO 1</p>',
                            font: ['Tahoma, Geneva, sans-serif', [7, 'px'], 'rgba(0,9,77,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            transform: [[], ['-3'], [], ['1.10413', '1.10414']]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1920px', '1080px'],
                            overflow: 'visible',
                            sizeRange: '0{:}{{:}:{:}}'
                        }
                    }
                },
                timeline: {
                    duration: 15000,
                    autoPlay: false,
                    labels: {
                        "IN 1": 0,
                        "STAY 1": 1000,
                        "OUT 1 IN 2": 1500,
                        "STAY 2": 2500,
                        "OUT 2 IN 3": 3000,
                        "STAY 3": 4000,
                        "OUT 3 IN 4": 4500,
                        "STAY 4": 5500,
                        "OUT 4 IN 5": 6000,
                        "STAY 5": 7000,
                        "OUT 5 IN 6": 7500,
                        "STAY 6": 8500,
                        "OUT 6 IN 7": 9000,
                        "STAY 7": 10000,
                        "OUT 7 IN 8": 10500,
                        "STAY 8": 11500,
                        "OUT 8 IN 9": 12000,
                        "STAY 9": 13000,
                        "OUT 9 IN 10": 13500,
                        "STAY 10": 14500,
                        "OUT 10": 15000
                    },
                    data: [
                        [
                            "eid1307",
                            "scaleY",
                            0,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1309",
                            "scaleY",
                            1000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1408",
                            "scaleY",
                            1500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1409",
                            "scaleY",
                            2500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1426",
                            "scaleY",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1427",
                            "scaleY",
                            4000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1428",
                            "scaleY",
                            4500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1429",
                            "scaleY",
                            5500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1446",
                            "scaleY",
                            6000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1447",
                            "scaleY",
                            7000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1448",
                            "scaleY",
                            7500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1449",
                            "scaleY",
                            8500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1466",
                            "scaleY",
                            9000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1467",
                            "scaleY",
                            10000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1468",
                            "scaleY",
                            10500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1469",
                            "scaleY",
                            11500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1486",
                            "scaleY",
                            12000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1487",
                            "scaleY",
                            13000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1488",
                            "scaleY",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1489",
                            "scaleY",
                            14500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1305",
                            "scaleX",
                            0,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1308",
                            "scaleX",
                            1000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1404",
                            "scaleX",
                            1500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1405",
                            "scaleX",
                            2500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1418",
                            "scaleX",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1419",
                            "scaleX",
                            4000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1420",
                            "scaleX",
                            4500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1421",
                            "scaleX",
                            5500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1438",
                            "scaleX",
                            6000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1439",
                            "scaleX",
                            7000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1440",
                            "scaleX",
                            7500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1441",
                            "scaleX",
                            8500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1458",
                            "scaleX",
                            9000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1459",
                            "scaleX",
                            10000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1460",
                            "scaleX",
                            10500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1461",
                            "scaleX",
                            11500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1478",
                            "scaleX",
                            12000,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1479",
                            "scaleX",
                            13000,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid1480",
                            "scaleX",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1.75',
                            '1'
                        ],
                        [
                            "eid1481",
                            "scaleX",
                            14500,
                            500,
                            "easeOutCubic",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '1.75'
                        ],
                        [
                            "eid2186",
                            "location",
                            1500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_2}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2187",
                            "location",
                            2500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_2}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid897",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1213",
                            "opacity",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1406",
                            "opacity",
                            1500,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1407",
                            "opacity",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1422",
                            "opacity",
                            3000,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1423",
                            "opacity",
                            4000,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1424",
                            "opacity",
                            4500,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1425",
                            "opacity",
                            5500,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1442",
                            "opacity",
                            6000,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1443",
                            "opacity",
                            7000,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1444",
                            "opacity",
                            7500,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1445",
                            "opacity",
                            8500,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1462",
                            "opacity",
                            9000,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1463",
                            "opacity",
                            10000,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1464",
                            "opacity",
                            10500,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1465",
                            "opacity",
                            11500,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1482",
                            "opacity",
                            12000,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1483",
                            "opacity",
                            13000,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1484",
                            "opacity",
                            13500,
                            1000,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1485",
                            "opacity",
                            14500,
                            500,
                            "easeInOutQuad",
                            "${fundo_para_estandarte_carnaval}",
                            '1',
                            '0'
                        ],
                        [
                            "eid1205",
                            "opacity",
                            0,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1212",
                            "opacity",
                            1000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1402",
                            "opacity",
                            1500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1403",
                            "opacity",
                            2500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1414",
                            "opacity",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1415",
                            "opacity",
                            4000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1416",
                            "opacity",
                            4500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1417",
                            "opacity",
                            5500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1434",
                            "opacity",
                            6000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1435",
                            "opacity",
                            7000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1436",
                            "opacity",
                            7500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1437",
                            "opacity",
                            8500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1454",
                            "opacity",
                            9000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1455",
                            "opacity",
                            10000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1456",
                            "opacity",
                            10500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1457",
                            "opacity",
                            11500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1474",
                            "opacity",
                            12000,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1475",
                            "opacity",
                            13000,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid1476",
                            "opacity",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0',
                            '0.8'
                        ],
                        [
                            "eid1477",
                            "opacity",
                            14500,
                            500,
                            "easeOutCubic",
                            "${bafo_bse}",
                            '0.800000',
                            '0'
                        ],
                        [
                            "eid2198",
                            "location",
                            10500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_8}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2199",
                            "location",
                            11500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_8}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid1199",
                            "location",
                            0,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1211",
                            "location",
                            1000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1400",
                            "location",
                            1500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1401",
                            "location",
                            2500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1410",
                            "location",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1411",
                            "location",
                            4000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1412",
                            "location",
                            4500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1413",
                            "location",
                            5500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1430",
                            "location",
                            6000,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1431",
                            "location",
                            7000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1432",
                            "location",
                            7500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1433",
                            "location",
                            8500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1450",
                            "location",
                            9000,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1451",
                            "location",
                            10000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1452",
                            "location",
                            10500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1453",
                            "location",
                            11500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1470",
                            "location",
                            12000,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1471",
                            "location",
                            13000,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid1472",
                            "location",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[1031, 1831.83, 0, 0, 0, 0,0],[955, 598.17, 0, 0, 0, 0,1236]]
                        ],
                        [
                            "eid1473",
                            "location",
                            14500,
                            500,
                            "easeOutCubic",
                            "${estandarte_torto_glow_CROP}",
                            [[955, 598.17, 0, 0, 0, 0,0],[1032.14, 1889.93, 0, 0, 0, 0,1294.06]]
                        ],
                        [
                            "eid2182",
                            "location",
                            0,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_1}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2184",
                            "location",
                            1000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_1}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid2188",
                            "location",
                            3000,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_3}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2189",
                            "location",
                            4000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_3}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid2194",
                            "location",
                            7500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_6}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2195",
                            "location",
                            8500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_6}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid2196",
                            "location",
                            9000,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_7}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2197",
                            "location",
                            10000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_7}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid2202",
                            "location",
                            13500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_10}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2203",
                            "location",
                            14500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_10}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid2200",
                            "location",
                            12000,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_9}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2201",
                            "location",
                            13000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_9}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid2190",
                            "location",
                            4500,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_4}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2191",
                            "location",
                            5500,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_4}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ],
                        [
                            "eid2192",
                            "location",
                            6000,
                            1000,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_5}",
                            [[1038.5, 1846.83, 0, 0, 0, 0,0],[961.5, 613.5, 0, 0, 0, 0,1235.73]]
                        ],
                        [
                            "eid2193",
                            "location",
                            7000,
                            500,
                            "easeOutCubic",
                            "${TEXTO_BLOCO_5}",
                            [[961.5, 613.5, 0, 0, 0, 0,0],[1038.33, 1847.27, 0, 0, 0, 0,1236.16]]
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("TOUCH___carnaval___36_edgeActions.js");
})("EDGE-3651174");
