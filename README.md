һ��	�ļ��нṹ
dev�ļ��У���������������Ŀ�Ŀ���Դ���룬��Ӧ����ʱ���ļ��е�Ŀ¼��

node_modules�ļ��У������������Ŀ��Ҫ��������

src/builds�ļ��У�������ʱ��ű�������Ŀ����Ӧ�����Ǵ���ú���е���Ӧ����ʱ����ļ����У�

src/components�ļ��У���������֮ǰ��Ŀ�����õ����Ŀɹ�ͯЬ�ǹ��õ�ģ�顣�ɸ����Լ���Ҫ�������Ӵ��

src/components/company-name�ļ��У�ͨ��url�ϵ�ƴ������cp,���жϹ�˾����չʾ��

ʹ�÷������ڶ�Ӧ��template.js�е��ã�

var companyname = new Companyname();

ʹ�������������get-parameter.js������Ҫ�����ô˷���֮���������ʹ�á�

ҳ����ʾ��˾����ʱ���Ӧ����ʽ��company-name.css�У�������ο�����ʽ��ʹ����company-name.js������ϸ˵����

src/components/device-judgment�ļ��У�������Ļ�ߴ磬ͨ��rem��λ����Ӧ������Ļ�ߴ硣��Ϊ�Ѿ��ҵ����������䷽�������Դ��ļ��в�������ϸ�Ľ��͡�

src/equipment-judgement�ļ��У��ж��豸(pc/ios/android)��

ʹ�÷������ڶ�Ӧ��template.js�е��ã�

var equipmentjudgement = new Equipmentjudgement();

equipmentjudgement.iosFlag

equipmentjudgement.androidFlag

equipmentjudgement.pcFlag

src/get-parameter�ļ��У���ȡҳ��url�����ϵ����ò�����

ʹ�÷������ڶ�Ӧ��template.js�е��ã�

var getParameter=new getparameter();

var fromId=getParameter.from;

src/ip2area�ļ��У�IP��ȡ��ַ�ӿڡ�

ʹ�÷������ڶ�Ӧ��template.js�е��ã�

var Ip2area = new Ip2area();

Ip2area.data

src/reset-css�ļ��У�ҳ���һЩ����������ʽ������ֱ�����ã�

src/statistics�ļ��У�ͳ����JS������ҳ�����á�����ֱ������

ʹ�÷������ڶ�Ӧ��template.js�е��ã�

let tj = new Statistics();

src/template�ļ��У������Լ����ؿ����ĵط����൱��һ��������

������������

npm run webpack    �ǻ���webpack.config.js

npm run develop     �ǻ���webpack.develop.config.js

npm run product     �ǻ���webpack.production.config.js

npm run start        ʹ��webpack�������ط�����������webpack.config.js


webpack�������ط�����

contentBase��Ĭ��webpack-dev-server��Ϊ���ļ����ṩ���ط������������Ϊ����һ��Ŀ¼�µ��ļ��ṩ���ط�������Ӧ������������������Ŀ¼
