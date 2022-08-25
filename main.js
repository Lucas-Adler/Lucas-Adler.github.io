// --- Banco de Dados -----------------------------------------------

let data = [
  {
    Arquivo: 'base_escr-000001Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1173.93',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '111.71',
    TotalElectricity: '3039.57'
  },
  {
    Arquivo: 'base_escr-000002Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS70 - Sunlight',
    Heating: '0',
    Cooling: '1092.07',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '103.47',
    TotalElectricity: '2949.45'
  },
  {
    Arquivo: 'base_escr-000003Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS60 - ST158',
    Heating: '0',
    Cooling: '1028.9',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '97.12',
    TotalElectricity: '2879.94'
  },
  {
    Arquivo: 'base_escr-000004Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS50 - KNT164',
    Heating: '0.01',
    Cooling: '973.06',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '91.53',
    TotalElectricity: '2818.51'
  },
  {
    Arquivo: 'base_escr-000005Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS40 - KNT455',
    Heating: '0.02',
    Cooling: '944.37',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '81.04',
    TotalElectricity: '2779.35'
  },
  {
    Arquivo: 'base_escr-000006Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS30 - ST420',
    Heating: '0.03',
    Cooling: '889.91',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '75.73',
    TotalElectricity: '2719.59'
  },
  {
    Arquivo: 'base_escr-000007Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS80 - Clear',
    Heating: '0.04',
    Cooling: '1150.48',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '104.29',
    TotalElectricity: '3008.73'
  },
  {
    Arquivo: 'base_escr-000008Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS70 - Sunlight',
    Heating: '0.05',
    Cooling: '1077.24',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '96.02',
    TotalElectricity: '2927.23'
  },
  {
    Arquivo: 'base_escr-000009Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS60 - ST158',
    Heating: '0.07',
    Cooling: '1021.9',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '89.82',
    TotalElectricity: '2865.71'
  },
  {
    Arquivo: 'base_escr-000010Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS50 - KNT164',
    Heating: '0.09',
    Cooling: '974.57',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '84.55',
    TotalElectricity: '2813.13'
  },
  {
    Arquivo: 'base_escr-000011Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS40 - KNT455',
    Heating: '0.1',
    Cooling: '926.21',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '85.44',
    TotalElectricity: '2765.67'
  },
  {
    Arquivo: 'base_escr-000012Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS30 - ST420',
    Heating: '0.12',
    Cooling: '870.55',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '79.69',
    TotalElectricity: '2704.28'
  },
  {
    Arquivo: 'base_escr-000013Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS80 - Clear',
    Heating: '0.34',
    Cooling: '795.32',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '69.92',
    TotalElectricity: '2619.5'
  },
  {
    Arquivo: 'base_escr-000014Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS70 - Sunlight',
    Heating: '0.4',
    Cooling: '757.95',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '65.64',
    TotalElectricity: '2577.92'
  },
  {
    Arquivo: 'base_escr-000015Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS60 - ST158',
    Heating: '0.45',
    Cooling: '729.89',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '62.77',
    TotalElectricity: '2547.02'
  },
  {
    Arquivo: 'base_escr-000016Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS50 - KNT164',
    Heating: '0.49',
    Cooling: '706.23',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '59.96',
    TotalElectricity: '2520.6'
  },
  {
    Arquivo: 'base_escr-000017Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS40 - KNT455',
    Heating: '0.53',
    Cooling: '687.74',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '58.26',
    TotalElectricity: '2500.45'
  },
  {
    Arquivo: 'base_escr-000018Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS30 - ST420',
    Heating: '0.61',
    Cooling: '658.44',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '55',
    TotalElectricity: '2467.97'
  },
  {
    Arquivo: 'base_escr-000019Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS80 - Clear',
    Heating: '0.04',
    Cooling: '1104.65',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '99.3',
    TotalElectricity: '2957.91'
  },
  {
    Arquivo: 'base_escr-000020Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS70 - Sunlight',
    Heating: '0.06',
    Cooling: '1036.88',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '91.96',
    TotalElectricity: '2882.83'
  },
  {
    Arquivo: 'base_escr-000021Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS60 - ST158',
    Heating: '0.09',
    Cooling: '985.37',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '86.35',
    TotalElectricity: '2825.73'
  },
  {
    Arquivo: 'base_escr-000022Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS50 - KNT164',
    Heating: '0.12',
    Cooling: '941.57',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '81.71',
    TotalElectricity: '2777.32'
  },
  {
    Arquivo: 'base_escr-000023Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS40 - KNT455',
    Heating: '0.17',
    Cooling: '908.23',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '79.44',
    TotalElectricity: '2741.76'
  },
  {
    Arquivo: 'base_escr-000024Table.csv',
    peitoril: '1.1',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS30 - ST420',
    Heating: '0.26',
    Cooling: '855.63',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '74.55',
    TotalElectricity: '2684.35'
  },
  {
    Arquivo: 'base_escr-000025Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1142.3',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '108.59',
    TotalElectricity: '3004.8'
  },
  {
    Arquivo: 'base_escr-000026Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS70 - Sunlight',
    Heating: '0',
    Cooling: '1058.48',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '100.15',
    TotalElectricity: '2912.55'
  },
  {
    Arquivo: 'base_escr-000027Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS60 - ST158',
    Heating: '0',
    Cooling: '992.56',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '93.53',
    TotalElectricity: '2840.01'
  },
  {
    Arquivo: 'base_escr-000028Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS50 - KNT164',
    Heating: '0',
    Cooling: '928.17',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '87.1',
    TotalElectricity: '2769.19'
  },
  {
    Arquivo: 'base_escr-000029Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS40 - KNT455',
    Heating: '0.01',
    Cooling: '884.62',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '74.6',
    TotalElectricity: '2713.15'
  },
  {
    Arquivo: 'base_escr-000030Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS30 - ST420',
    Heating: '0.02',
    Cooling: '823.19',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '68.63',
    TotalElectricity: '2645.76'
  },
  {
    Arquivo: 'base_escr-000031Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS80 - Clear',
    Heating: '0.01',
    Cooling: '1124.35',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '99.87',
    TotalElectricity: '2978.15'
  },
  {
    Arquivo: 'base_escr-000032Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS70 - Sunlight',
    Heating: '0.02',
    Cooling: '1050.43',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '91.67',
    TotalElectricity: '2896.04'
  },
  {
    Arquivo: 'base_escr-000033Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS60 - ST158',
    Heating: '0.04',
    Cooling: '993.97',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '85.5',
    TotalElectricity: '2833.42'
  },
  {
    Arquivo: 'base_escr-000034Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS50 - KNT164',
    Heating: '0.05',
    Cooling: '941.36',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '79.81',
    TotalElectricity: '2775.14'
  },
  {
    Arquivo: 'base_escr-000035Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS40 - KNT455',
    Heating: '0.07',
    Cooling: '879.38',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '73.17',
    TotalElectricity: '2706.55'
  },
  {
    Arquivo: 'base_escr-000036Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS30 - ST420',
    Heating: '0.11',
    Cooling: '816.43',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '66.64',
    TotalElectricity: '2637.1'
  },
  {
    Arquivo: 'base_escr-000037Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS80 - Clear',
    Heating: '0.2',
    Cooling: '802.77',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '69.36',
    TotalElectricity: '2626.24'
  },
  {
    Arquivo: 'base_escr-000038Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS70 - Sunlight',
    Heating: '0.25',
    Cooling: '764.38',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '65.39',
    TotalElectricity: '2583.94'
  },
  {
    Arquivo: 'base_escr-000039Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS60 - ST158',
    Heating: '0.28',
    Cooling: '735.32',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '62.4',
    TotalElectricity: '2551.92'
  },
  {
    Arquivo: 'base_escr-000040Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS50 - KNT164',
    Heating: '0.31',
    Cooling: '708.32',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '59.64',
    TotalElectricity: '2522.19'
  },
  {
    Arquivo: 'base_escr-000041Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS40 - KNT455',
    Heating: '0.35',
    Cooling: '677.67',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '56.22',
    TotalElectricity: '2488.17'
  },
  {
    Arquivo: 'base_escr-000042Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS30 - ST420',
    Heating: '0.4',
    Cooling: '644.82',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '52.96',
    TotalElectricity: '2452.1'
  },
  {
    Arquivo: 'base_escr-000043Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS80 - Clear',
    Heating: '0.02',
    Cooling: '1087.89',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '96.14',
    TotalElectricity: '2937.97'
  },
  {
    Arquivo: 'base_escr-000044Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS70 - Sunlight',
    Heating: '0.03',
    Cooling: '1016.81',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '88.22',
    TotalElectricity: '2858.98'
  },
  {
    Arquivo: 'base_escr-000045Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS60 - ST158',
    Heating: '0.04',
    Cooling: '962.31',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '82.29',
    TotalElectricity: '2798.56'
  },
  {
    Arquivo: 'base_escr-000046Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS50 - KNT164',
    Heating: '0.07',
    Cooling: '912.24',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '76.88',
    TotalElectricity: '2743.11'
  },
  {
    Arquivo: 'base_escr-000047Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS40 - KNT455',
    Heating: '0.11',
    Cooling: '854.66',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '71.12',
    TotalElectricity: '2679.81'
  },
  {
    Arquivo: 'base_escr-000048Table.csv',
    peitoril: '1.1',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS30 - ST420',
    Heating: '0.17',
    Cooling: '794.67',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '65.42',
    TotalElectricity: '2614.18'
  },
  {
    Arquivo: 'base_escr-000049Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1300.34',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '124.48',
    TotalElectricity: '3178.74'
  },
  {
    Arquivo: 'base_escr-000050Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS70 - Sunlight',
    Heating: '0',
    Cooling: '1201.73',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '114.52',
    TotalElectricity: '3070.18'
  },
  {
    Arquivo: 'base_escr-000051Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS60 - ST158',
    Heating: '0',
    Cooling: '1126.96',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '106.98',
    TotalElectricity: '2987.87'
  },
  {
    Arquivo: 'base_escr-000052Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS50 - KNT164',
    Heating: '0',
    Cooling: '1062.44',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '100.49',
    TotalElectricity: '2916.85'
  },
  {
    Arquivo: 'base_escr-000053Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS40 - KNT455',
    Heating: '0.01',
    Cooling: '1011.07',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '95.35',
    TotalElectricity: '2860.35'
  },
  {
    Arquivo: 'base_escr-000054Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS30 - ST420',
    Heating: '0.02',
    Cooling: '942.85',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '81.18',
    TotalElectricity: '2777.97'
  },
  {
    Arquivo: 'base_escr-000055Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS80 - Clear',
    Heating: '0.02',
    Cooling: '1261.17',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '117.35',
    TotalElectricity: '3132.46'
  },
  {
    Arquivo: 'base_escr-000056Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS70 - Sunlight',
    Heating: '0.04',
    Cooling: '1172.22',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '107.07',
    TotalElectricity: '3033.25'
  },
  {
    Arquivo: 'base_escr-000057Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS60 - ST158',
    Heating: '0.06',
    Cooling: '1104.72',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '99.46',
    TotalElectricity: '2958.16'
  },
  {
    Arquivo: 'base_escr-000058Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS50 - KNT164',
    Heating: '0.07',
    Cooling: '1039.05',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '97.43',
    TotalElectricity: '2890.47'
  },
  {
    Arquivo: 'base_escr-000059Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS40 - KNT455',
    Heating: '0.08',
    Cooling: '995.88',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '93.27',
    TotalElectricity: '2843.15'
  },
  {
    Arquivo: 'base_escr-000060Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS30 - ST420',
    Heating: '0.11',
    Cooling: '926.63',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '86.5',
    TotalElectricity: '2767.16'
  },
  {
    Arquivo: 'base_escr-000061Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS80 - Clear',
    Heating: '0.32',
    Cooling: '848.19',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '76.03',
    TotalElectricity: '2678.47'
  },
  {
    Arquivo: 'base_escr-000062Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS70 - Sunlight',
    Heating: '0.39',
    Cooling: '802.92',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '70.83',
    TotalElectricity: '2628.06'
  },
  {
    Arquivo: 'base_escr-000063Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS60 - ST158',
    Heating: '0.45',
    Cooling: '769.31',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '66.89',
    TotalElectricity: '2590.57'
  },
  {
    Arquivo: 'base_escr-000064Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS50 - KNT164',
    Heating: '0.51',
    Cooling: '740.04',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '63.89',
    TotalElectricity: '2558.35'
  },
  {
    Arquivo: 'base_escr-000065Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS40 - KNT455',
    Heating: '0.56',
    Cooling: '717.37',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '61.38',
    TotalElectricity: '2533.23'
  },
  {
    Arquivo: 'base_escr-000066Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS30 - ST420',
    Heating: '0.65',
    Cooling: '681.75',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '57.8',
    TotalElectricity: '2494.13'
  },
  {
    Arquivo: 'base_escr-000067Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS80 - Clear',
    Heating: '0.03',
    Cooling: '1212.23',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '112.71',
    TotalElectricity: '3078.89'
  },
  {
    Arquivo: 'base_escr-000068Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS70 - Sunlight',
    Heating: '0.05',
    Cooling: '1129.7',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '103.39',
    TotalElectricity: '2987.06'
  },
  {
    Arquivo: 'base_escr-000069Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS60 - ST158',
    Heating: '0.08',
    Cooling: '1066.39',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '96.43',
    TotalElectricity: '2916.82'
  },
  {
    Arquivo: 'base_escr-000070Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS50 - KNT164',
    Heating: '0.11',
    Cooling: '1012.96',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '90.6',
    TotalElectricity: '2857.59'
  },
  {
    Arquivo: 'base_escr-000071Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS40 - KNT455',
    Heating: '0.16',
    Cooling: '971.85',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '88',
    TotalElectricity: '2813.93'
  },
  {
    Arquivo: 'base_escr-000072Table.csv',
    peitoril: '0.8',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS30 - ST420',
    Heating: '0.26',
    Cooling: '907.32',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '81.28',
    TotalElectricity: '2742.77'
  },
  {
    Arquivo: 'base_escr-000073Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1268.74',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '121.36',
    TotalElectricity: '3144.02'
  },
  {
    Arquivo: 'base_escr-000074Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS70 - Sunlight',
    Heating: '0',
    Cooling: '1167.07',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '111.09',
    TotalElectricity: '3032.08'
  },
  {
    Arquivo: 'base_escr-000075Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS60 - ST158',
    Heating: '0',
    Cooling: '1089.34',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '103.26',
    TotalElectricity: '2946.52'
  },
  {
    Arquivo: 'base_escr-000076Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS50 - KNT164',
    Heating: '0',
    Cooling: '1015.46',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '95.83',
    TotalElectricity: '2865.21'
  },
  {
    Arquivo: 'base_escr-000077Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS40 - KNT455',
    Heating: '0',
    Cooling: '940.58',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '79.97',
    TotalElectricity: '2774.47'
  },
  {
    Arquivo: 'base_escr-000078Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS30 - ST420',
    Heating: '0.02',
    Cooling: '865.01',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '72.55',
    TotalElectricity: '2691.5'
  },
  {
    Arquivo: 'base_escr-000079Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1227.41',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '116',
    TotalElectricity: '3097.33'
  },
  {
    Arquivo: 'base_escr-000080Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS70 - Sunlight',
    Heating: '0.01',
    Cooling: '1144.68',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '102.31',
    TotalElectricity: '3000.92'
  },
  {
    Arquivo: 'base_escr-000081Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS60 - ST158',
    Heating: '0.02',
    Cooling: '1075.16',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '94.53',
    TotalElectricity: '2923.62'
  },
  {
    Arquivo: 'base_escr-000082Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS50 - KNT164',
    Heating: '0.03',
    Cooling: '1010.88',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '87.44',
    TotalElectricity: '2852.27'
  },
  {
    Arquivo: 'base_escr-000083Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS40 - KNT455',
    Heating: '0.06',
    Cooling: '934.32',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '79.07',
    TotalElectricity: '2767.37'
  },
  {
    Arquivo: 'base_escr-000084Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS30 - ST420',
    Heating: '0.09',
    Cooling: '856.46',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '70.86',
    TotalElectricity: '2681.32'
  },
  {
    Arquivo: 'base_escr-000085Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS80 - Clear',
    Heating: '0.15',
    Cooling: '860.75',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '75.77',
    TotalElectricity: '2690.59'
  },
  {
    Arquivo: 'base_escr-000086Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS70 - Sunlight',
    Heating: '0.21',
    Cooling: '814.37',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '70.41',
    TotalElectricity: '2638.91'
  },
  {
    Arquivo: 'base_escr-000087Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS60 - ST158',
    Heating: '0.25',
    Cooling: '778.3',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '66.65',
    TotalElectricity: '2599.13'
  },
  {
    Arquivo: 'base_escr-000088Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS50 - KNT164',
    Heating: '0.29',
    Cooling: '745.18',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '63.24',
    TotalElectricity: '2562.63'
  },
  {
    Arquivo: 'base_escr-000089Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS40 - KNT455',
    Heating: '0.34',
    Cooling: '707.03',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '59.43',
    TotalElectricity: '2520.72'
  },
  {
    Arquivo: 'base_escr-000090Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS30 - ST420',
    Heating: '0.4',
    Cooling: '666.45',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '55.34',
    TotalElectricity: '2476.11'
  },
  {
    Arquivo: 'base_escr-000091Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS80 - Clear',
    Heating: '0.01',
    Cooling: '1198.93',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '109.39',
    TotalElectricity: '3062.24'
  },
  {
    Arquivo: 'base_escr-000092Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS70 - Sunlight',
    Heating: '0.02',
    Cooling: '1110.87',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '99.46',
    TotalElectricity: '2964.27'
  },
  {
    Arquivo: 'base_escr-000093Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS60 - ST158',
    Heating: '0.03',
    Cooling: '1043.08',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '91.87',
    TotalElectricity: '2888.9'
  },
  {
    Arquivo: 'base_escr-000094Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS50 - KNT164',
    Heating: '0.05',
    Cooling: '981.39',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '85.04',
    TotalElectricity: '2820.4'
  },
  {
    Arquivo: 'base_escr-000095Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS40 - KNT455',
    Heating: '0.09',
    Cooling: '909.64',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '77.73',
    TotalElectricity: '2741.38'
  },
  {
    Arquivo: 'base_escr-000096Table.csv',
    peitoril: '0.8',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS30 - ST420',
    Heating: '0.15',
    Cooling: '835.82',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '70.83',
    TotalElectricity: '2660.72'
  },
  {
    Arquivo: 'base_escr-000097Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1420.9',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '136.7',
    TotalElectricity: '3311.53'
  },
  {
    Arquivo: 'base_escr-000098Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS70 - Sunlight',
    Heating: '0',
    Cooling: '1305.7',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '125.04',
    TotalElectricity: '3184.66'
  },
  {
    Arquivo: 'base_escr-000099Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS60 - ST158',
    Heating: '0',
    Cooling: '1219.09',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '116.28',
    TotalElectricity: '3089.29'
  },
  {
    Arquivo: 'base_escr-000100Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS50 - KNT164',
    Heating: '0',
    Cooling: '1144.78',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '108.79',
    TotalElectricity: '3007.49'
  },
  {
    Arquivo: 'base_escr-000101Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS40 - KNT455',
    Heating: '0.01',
    Cooling: '1085.85',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '102.87',
    TotalElectricity: '2942.65'
  },
  {
    Arquivo: 'base_escr-000102Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '0',
    vidro: 'FS30 - ST420',
    Heating: '0.02',
    Cooling: '992.11',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '93.46',
    TotalElectricity: '2839.51'
  },
  {
    Arquivo: 'base_escr-000103Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS80 - Clear',
    Heating: '0.01',
    Cooling: '1370.53',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '130.2',
    TotalElectricity: '3254.65'
  },
  {
    Arquivo: 'base_escr-000104Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS70 - Sunlight',
    Heating: '0.03',
    Cooling: '1265.69',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '119.83',
    TotalElectricity: '3139.48'
  },
  {
    Arquivo: 'base_escr-000105Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS60 - ST158',
    Heating: '0.05',
    Cooling: '1185.04',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '111.86',
    TotalElectricity: '3050.87'
  },
  {
    Arquivo: 'base_escr-000106Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS50 - KNT164',
    Heating: '0.06',
    Cooling: '1116.57',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '105.11',
    TotalElectricity: '2975.67'
  },
  {
    Arquivo: 'base_escr-000107Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS40 - KNT455',
    Heating: '0.07',
    Cooling: '1064.22',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '100.03',
    TotalElectricity: '2918.25'
  },
  {
    Arquivo: 'base_escr-000108Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '90',
    vidro: 'FS30 - ST420',
    Heating: '0.1',
    Cooling: '981.98',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '91.98',
    TotalElectricity: '2827.98'
  },
  {
    Arquivo: 'base_escr-000109Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS80 - Clear',
    Heating: '0.31',
    Cooling: '898.44',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '81.96',
    TotalElectricity: '2734.63'
  },
  {
    Arquivo: 'base_escr-000110Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS70 - Sunlight',
    Heating: '0.39',
    Cooling: '845.92',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '75.89',
    TotalElectricity: '2676.13'
  },
  {
    Arquivo: 'base_escr-000111Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS60 - ST158',
    Heating: '0.46',
    Cooling: '806.89',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '71.3',
    TotalElectricity: '2632.57'
  },
  {
    Arquivo: 'base_escr-000112Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS50 - KNT164',
    Heating: '0.52',
    Cooling: '772.98',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '67.77',
    TotalElectricity: '2595.19'
  },
  {
    Arquivo: 'base_escr-000113Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS40 - KNT455',
    Heating: '0.58',
    Cooling: '746.56',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '64.85',
    TotalElectricity: '2565.91'
  },
  {
    Arquivo: 'base_escr-000114Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '180',
    vidro: 'FS30 - ST420',
    Heating: '0.69',
    Cooling: '704.62',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '60.57',
    TotalElectricity: '2519.79'
  },
  {
    Arquivo: 'base_escr-000115Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS80 - Clear',
    Heating: '0.03',
    Cooling: '1315.82',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '125.26',
    TotalElectricity: '3195.03'
  },
  {
    Arquivo: 'base_escr-000116Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS70 - Sunlight',
    Heating: '0.05',
    Cooling: '1218.21',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '114.7',
    TotalElectricity: '3086.87'
  },
  {
    Arquivo: 'base_escr-000117Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS60 - ST158',
    Heating: '0.07',
    Cooling: '1144.51',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '106.39',
    TotalElectricity: '3004.89'
  },
  {
    Arquivo: 'base_escr-000118Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS50 - KNT164',
    Heating: '0.1',
    Cooling: '1082.04',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '99.41',
    TotalElectricity: '2935.46'
  },
  {
    Arquivo: 'base_escr-000119Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS40 - KNT455',
    Heating: '0.15',
    Cooling: '1033.17',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '95.99',
    TotalElectricity: '2883.23'
  },
  {
    Arquivo: 'base_escr-000120Table.csv',
    peitoril: '0.5',
    composicao: 'laminado',
    azim: '270',
    vidro: 'FS30 - ST420',
    Heating: '0.26',
    Cooling: '956.89',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '87.83',
    TotalElectricity: '2798.89'
  },
  {
    Arquivo: 'base_escr-000121Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1392.36',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '133.89',
    TotalElectricity: '3280.17'
  },
  {
    Arquivo: 'base_escr-000122Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS70 - Sunlight',
    Heating: '0',
    Cooling: '1271.88',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '121.69',
    TotalElectricity: '3147.49'
  },
  {
    Arquivo: 'base_escr-000123Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS60 - ST158',
    Heating: '0',
    Cooling: '1180.99',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '112.5',
    TotalElectricity: '3047.41'
  },
  {
    Arquivo: 'base_escr-000124Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS50 - KNT164',
    Heating: '0',
    Cooling: '1095.88',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '103.92',
    TotalElectricity: '2953.72'
  },
  {
    Arquivo: 'base_escr-000125Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS40 - KNT455',
    Heating: '0',
    Cooling: '994.42',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '93.73',
    TotalElectricity: '2842.06'
  },
  {
    Arquivo: 'base_escr-000126Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '0',
    vidro: 'FS30 - ST420',
    Heating: '0.01',
    Cooling: '905.8',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '76.88',
    TotalElectricity: '2736.61'
  },
  {
    Arquivo: 'base_escr-000127Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1348.6',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '128.07',
    TotalElectricity: '3230.59'
  },
  {
    Arquivo: 'base_escr-000128Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS70 - Sunlight',
    Heating: '0',
    Cooling: '1236.25',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '116.94',
    TotalElectricity: '3107.11'
  },
  {
    Arquivo: 'base_escr-000129Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS60 - ST158',
    Heating: '0.01',
    Cooling: '1149.77',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '108.39',
    TotalElectricity: '3012.08'
  },
  {
    Arquivo: 'base_escr-000130Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS50 - KNT164',
    Heating: '0.02',
    Cooling: '1070.31',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '100.56',
    TotalElectricity: '2924.81'
  },
  {
    Arquivo: 'base_escr-000131Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS40 - KNT455',
    Heating: '0.04',
    Cooling: '980.92',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '91.35',
    TotalElectricity: '2826.23'
  },
  {
    Arquivo: 'base_escr-000132Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '90',
    vidro: 'FS30 - ST420',
    Heating: '0.07',
    Cooling: '890.07',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '80.84',
    TotalElectricity: '2724.9'
  },
  {
    Arquivo: 'base_escr-000133Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS80 - Clear',
    Heating: '0.12',
    Cooling: '918.28',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '81.73',
    TotalElectricity: '2754.05'
  },
  {
    Arquivo: 'base_escr-000134Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS70 - Sunlight',
    Heating: '0.17',
    Cooling: '862.97',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '75.84',
    TotalElectricity: '2692.91'
  },
  {
    Arquivo: 'base_escr-000135Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS60 - ST158',
    Heating: '0.22',
    Cooling: '820.52',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '71.33',
    TotalElectricity: '2645.99'
  },
  {
    Arquivo: 'base_escr-000136Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS50 - KNT164',
    Heating: '0.27',
    Cooling: '781.02',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '67.2',
    TotalElectricity: '2602.4'
  },
  {
    Arquivo: 'base_escr-000137Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS40 - KNT455',
    Heating: '0.32',
    Cooling: '736.05',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '62.25',
    TotalElectricity: '2552.54'
  },
  {
    Arquivo: 'base_escr-000138Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '180',
    vidro: 'FS30 - ST420',
    Heating: '0.39',
    Cooling: '687.95',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '57.37',
    TotalElectricity: '2499.63'
  },
  {
    Arquivo: 'base_escr-000139Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS80 - Clear',
    Heating: '0',
    Cooling: '1307.93',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '122.88',
    TotalElectricity: '3184.74'
  },
  {
    Arquivo: 'base_escr-000140Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS70 - Sunlight',
    Heating: '0.01',
    Cooling: '1203.23',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '110.77',
    TotalElectricity: '3067.94'
  },
  {
    Arquivo: 'base_escr-000141Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS60 - ST158',
    Heating: '0.02',
    Cooling: '1123.32',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '101.49',
    TotalElectricity: '2978.76'
  },
  {
    Arquivo: 'base_escr-000142Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS50 - KNT164',
    Heating: '0.04',
    Cooling: '1049.25',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '93.23',
    TotalElectricity: '2896.44'
  },
  {
    Arquivo: 'base_escr-000143Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS40 - KNT455',
    Heating: '0.08',
    Cooling: '964.11',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '84.81',
    TotalElectricity: '2802.91'
  },
  {
    Arquivo: 'base_escr-000144Table.csv',
    peitoril: '0.5',
    composicao: 'insulado',
    azim: '270',
    vidro: 'FS30 - ST420',
    Heating: '0.13',
    Cooling: '876.15',
    InteriorLights: '751.68',
    InteriorEquipment: '1002.24',
    Fans: '75.83',
    TotalElectricity: '2706.03'
  },
  {
    Arquivo: '',
    peitoril: null,
    composicao: null,
    azim: null,
    vidro: null,
    Heating: null,
    Cooling: null,
    InteriorLights: null,
    InteriorEquipment: null,
    Fans: null,
    TotalElectricity: null
  }
]

// --- Vidros --------------------------------------------------------------------

const FS80 = ['FS80 - Clear']
const FS70 = ['FS70 - Sunlight']
const FS60 = ['FS60 - ST158']
const FS50 = ['FS50 - KNT164']
const FS40 = ['FS40 - KNT455']
const FS30 = ['FS30 - ST420']

// --- WWR -----------------------------------------------------------------------

const wwr40 = [1.1]
const wwr50 = [0.9]
const wwr60 = [0.5]

// --- Norte ---------------------------------------------------------------------

const north = [0]
const east = [90]
const south = [180]
const west = [270]

// --- Variaveis -----------------------------------------------------------------

let arr = []
let glassSelect = []
let wwrSelect = []
let azmtSelect = []
let glass = document.querySelector('#glass')
let wwr = document.querySelector('#wwr')
let azimut = document.querySelector('#azmt')

// --- Funções -------------------------------------------------------------------

function addGlassToArr() {
  if (glass.value === '1') {
    glassSelect = 'FS80 - Clear'
    return glassSelect
  } else if (glass.value === '2') {
    glassSelect = 'FS70 - Sunlight'
    return glassSelect
  } else if (glass.value === '3') {
    glassSelect = 'FS60 - ST158'
    return glassSelect
  } else if (glass.value === '4') {
    glassSelect = 'FS50 - KNT164'
    return glassSelect
  } else if (glass.value === '5') {
    glassSelect = 'FS40 - KNT455'
    return glassSelect
  } else if (glass.value === '6') {
    glassSelect = 'FS30 - ST420'
    return glassSelect
  }
} // SELECIONO O FATOR SOLAR DO VIDRO
addGlassToArr()

function addWwrToArr() {
  if (wwr.value === '1') {
    wwrSelect = '1.1'
    return wwrSelect
  } else if (wwr.value === '2') {
    wwrSelect = '0.8'
    return wwrSelect
  } else if (wwr.value === '3') {
    wwrSelect = '0.5'
    return wwrSelect
  }
} // SELECIONO O WINDOW TO WALL RATIO (PEITORIL)
addWwrToArr()

function addAzmtToArr() {
  if (azimut.value === '1') {
    azmtSelect = '0'
    return azmtSelect
  } else if (azimut.value === '2') {
    azmtSelect = '90'
    return azmtSelect
  } else if (azimut.value === '3') {
    azmtSelect = '180'
    return azmtSelect
  } else if (azimut.value === '4') {
    azmtSelect = '270'
    return azmtSelect
  }
} // SELECIONO O NORTE
addAzmtToArr()

// --- Função Botão -----------------------------------------------------------------

var c = document.getElementById('myChart')
var ctx = c.getContext('2d')

ctx.font = '1.5rem Poppins'
ctx.textAlign = 'center'
ctx.fillText('Escolha os Parâmetros', 234, 175) // PLOTO NA TELA A INFORMAÇÃO PARA SELECIONAR OS PARAMETROS DE VIDRO

// var button = document.getElementById("button"),
//   count = 0;

// console.log(count)

// var button = document.getElementById("button"),
//   count = 0;
//  function clickCount() {
//   count += 1;
//   console.log(count)
//   if (count > 1) {
//     document.location.reload(true)
//   }
// };

//BOTAO DE SELEÇÃO
function dataBase() {
  // AQUI EU SELECIONO AS INFOS DO BANCO DE DADOS
  const resultado = data
    .filter(
      item =>
        item.peitoril === addWwrToArr() &&
        item.azim === addAzmtToArr() &&
        item.vidro === addGlassToArr() &&
        item.composicao === 'laminado'
    ) // EXTRAIO QUAL O VIDRO FOI SELECIONADO
    .map(function (item) {
      return item.TotalElectricity
    }) // EXTRAIO O VALOR DE ENERGIA QUE O VIDRO TRANSMITIU

  let sim_01 = parseInt(resultado) // CONVERTO O RESULTADO DO .MAP() EM UMA INTEGRAL

  const ctx = document.getElementById('myChart').getContext('2d')
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: [],
      datasets: [
        {
          label: 'Resultado',
          data: [
            { x: 'setPoint', y: 3039 },
            { x: 'sim_01', y: sim_01 }
          ], // OS DADOS QUE SERÃO APRESENTADOS NO GRÁFICO

          backgroundColor: ['rgba(54, 162, 235, 0.2)'],
          borderColor: ['rgba(54, 162, 235, 1)'],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  }) // O GRAFICO QUE É APRESENTADO NA TELA

  let copyData = [addGlassToArr(), addWwrToArr(), addAzmtToArr()]

  function clipboard() {
    navigator.clipboard.writeText(copyData)
  }
  clipboard()
}

//BOTAO DE NOVO RESULTADO
function reload() {
  document.location.reload(true)
}

// --- Automação do site ------------------------------------------------------------
