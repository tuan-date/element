"use strict";(self.webpackChunkelement_web=self.webpackChunkelement_web||[]).push([[972],{"./node_modules/matrix-react-sdk/src/async-components/views/dialogs/security/NewRecoveryMethodDialog.tsx":(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var n=s("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),o=s("./node_modules/react/index.js"),i=s("./node_modules/matrix-react-sdk/src/MatrixClientPeg.ts"),r=s("./node_modules/matrix-react-sdk/src/dispatcher/dispatcher.ts"),c=s("./node_modules/matrix-react-sdk/src/languageHandler.tsx"),a=s("./node_modules/matrix-react-sdk/src/Modal.tsx"),l=s("./node_modules/matrix-react-sdk/src/components/views/dialogs/security/RestoreKeyBackupDialog.tsx"),d=s("./node_modules/matrix-react-sdk/src/dispatcher/actions.ts"),m=s("./node_modules/matrix-react-sdk/src/components/views/elements/DialogButtons.tsx"),_=s("./node_modules/matrix-react-sdk/src/components/views/dialogs/BaseDialog.tsx");class u extends o.PureComponent{constructor(...e){super(...e),(0,n.Z)(this,"onOkClick",(()=>{this.props.onFinished()})),(0,n.Z)(this,"onGoToSettingsClick",(()=>{this.props.onFinished(),r.ZP.fire(d.a.ViewUserSettings)})),(0,n.Z)(this,"onSetupClick",(async()=>{a.ZP.createDialog(l.Z,{onFinished:this.props.onFinished},void 0,!1,!0)}))}render(){const e=o.createElement("span",{className:"mx_KeyBackupFailedDialog_title"},(0,c._t)("encryption|new_recovery_method_detected|title")),t=o.createElement("p",null,(0,c._t)("encryption|new_recovery_method_detected|description_1")),s=o.createElement("p",{className:"warning"},(0,c._t)("encryption|new_recovery_method_detected|warning"));let n;return n=i.p.safeGet().getKeyBackupEnabled()?o.createElement("div",null,t,o.createElement("p",null,(0,c._t)("encryption|new_recovery_method_detected|description_2")),s,o.createElement(m.Z,{primaryButton:(0,c._t)("action|ok"),onPrimaryButtonClick:this.onOkClick,cancelButton:(0,c._t)("common|go_to_settings"),onCancel:this.onGoToSettingsClick})):o.createElement("div",null,t,s,o.createElement(m.Z,{primaryButton:(0,c._t)("common|setup_secure_messages"),onPrimaryButtonClick:this.onSetupClick,cancelButton:(0,c._t)("common|go_to_settings"),onCancel:this.onGoToSettingsClick})),o.createElement(_.Z,{className:"mx_KeyBackupFailedDialog",onFinished:this.props.onFinished,title:e},n)}}}}]);
//# sourceMappingURL=972.js.map