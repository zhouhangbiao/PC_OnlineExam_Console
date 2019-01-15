/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function (config) {
  config.toolbarGroups = [
    { name: 'document', groups: ['mode', 'document', 'doctools'] },
    { name: 'clipboard', groups: ['clipboard', 'undo'] },
    { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
    { name: 'forms', groups: ['forms'] },
    { name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
    { name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi', 'paragraph'] },
    { name: 'links', groups: ['links'] },
    { name: 'insert', groups: ['insert'] },
    { name: 'styles', groups: ['styles'] },
    { name: 'colors', groups: ['colors'] },
    { name: 'tools', groups: ['tools'] },
    { name: 'others', groups: ['others'] },
    { name: 'about', groups: ['about'] }
  ];

  config.removeButtons = 'Save,Templates,NewPage,Preview,Print,Cut,Copy,Paste,PasteText,PasteFromWord,Find,Replace,SelectAll,Scayt,Form,Checkbox,Radio,TextField,Textarea,Select,Button,ImageButton,HiddenField,CopyFormatting,RemoveFormat,NumberedList,BulletedList,Outdent,Indent,Blockquote,CreateDiv,BidiLtr,BidiRtl,Language,Link,Anchor,Image,Flash,Smiley,SpecialChar,PageBreak,Iframe,HorizontalRule,Styles,TextColor,BGColor,Maximize,ShowBlocks,About,Unlink,Source';
  config.font_names = '宋体/SimSun;新宋体/NSimSun;仿宋_GB2312/FangSong_GB2312;楷体_GB2312/KaiTi_GB2312;黑体/SimHei;微软雅黑/Microsoft YaHei;' + config.font_names;
};
