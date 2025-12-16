sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (MessageToast, Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.winslow.HRDocumentation.Card", {
		onInit: function () {
			this.TileData = [
				{ type: "HR Documentation", title: "WINBMS-SP-04-A – Human Resources Manual", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A%20Human%20Resources%20Manual.pdf" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-12.1 – Personnel Training Plan", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-%2012.1%20Personnel%20Training%20Plan.docx?d=w1f8a16997e93415ca6b987186e153096" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-13.1 – Working from Home Procedure", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A%2013.1%20Working%20from%20Home%20Procedure.docx?d=we41e1014e2634e72923ec5dc1c975a14" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-13.3 – WFH Arrangement – Self", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A%20HR%2013.3%20WFH%20Arrangement-self.docx?d=w4e67cc40d3514d76ae0d0de74a634929" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-13.4 – Employee Risk Assessment Form", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A%20HR%2013.4%20Employee%20RiskAssessment%20Form.docx?d=w102e9f4be0a240efb647eefbcbd08286" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-13.4 – Employee Risk Assessment Form", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A.5.1%20Site%20Personnel%20Induction.docx?d=w6bbcf3254df046a1bbd521bf9c058c3d" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-5.1.1 – Workshop Personnel Induction", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A.5.1.1%20Workshop%20Personnel%20Induction.docx?d=w2aa9f0501e2f409796db7882c527549e" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-1.1 – Authority to Hire", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-1.1%20Authority%20to%20Hire.docx?d=w59bfe57d66f54d63a2cad742d73962c5" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-1.2 – Role Description Template", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-1.2%20Role%20Description%20Template.docx?d=w8c68b42f39b444d9b49c4143482c5922" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-1.3 – Job Advertisement", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-1.3%20Job%20Advertisement.docx?d=w8d96489ecfc4450484b2c457b97d64c6" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-1.5 – Interview Confirmation", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-1.3%20Job%20Advertisement.docx?d=w8d96489ecfc4450484b2c457b97d64c6" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-1.6 – Interview Guide", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-1.6%20Interview%20Guide.docx?d=wd8910f264f2f42b9bc35dd2ec88bfce7" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-1.8 – Driver Evaluation Questionnaire", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-1.8%20Driver%20Evaluation%20Questionnaire.docx?d=wf169d607d87542499c0d5eb7c3780c3b" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-10.1 – Personal Vehicle Use Expense Claim", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-10.1%20Personal%20Vehicle%20Use%20Expense%20Claim.xlsx?d=w38ac0b3f967c4cea90a220452d793c88" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-10.2 – Entertainment Expense Claim", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-10.2%20Entertainment%20Expense%20Claim.xlsx?d=w47230ec3eacb41e0a1a1b521a1a9c124" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-10.4 – Wage Deduction Authority", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-10.2%20Entertainment%20Expense%20Claim.xlsx?d=w47230ec3eacb41e0a1a1b521a1a9c124" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-10.5 – Travel Request", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-10.5%20Travel%20Request.docx?d=w5b15adac17524f058aa0d43cb3084824" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-12.2 – Record of Training", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-12.2%20Record%20of%20Training.docx?d=w1dbe2a3229a44eecb2df9d631fb9db83" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-2.1 - Employment Offer Summary", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-2.1%20Employment%20Offer%20Summary.docx?d=wf7727cda0c4644fab127a0a61f92193b" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.2 – Vehicle Rental Request", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3%202%20Vehicle%20Rental%20Request.docx?d=w2ceec7203bb0476fba07353c901ecfe8" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.1 – Employee Asset Request", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.1%20Employee%20Asset%20Request%20R.docx?d=w4837ff66f2f0410fbc7a7562e723e5f4" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.3 – Asset Acceptance", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.3%20Asset%20Acceptance.docx?d=w060f9fd90cee4e03b7c70944fab9cfbd" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.4 – Cash Advance Policy", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.4%20Cash%20Advance%20Policy.docx?d=w863100d1ab934bbdacbc76526ab2e87a" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.5 – Uniform Request", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.5%20Uniform%20Request.docx?d=wfed741d4a7514847ac5811de79553d71" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.6 – Induction Kit", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.6%20Induction%20Kit.xlsx?d=w6e69f2cd688b45838b590a630f096c1e" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.7 – Tool Kit", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.7%20Tool%20Kit.docx?d=wef95033922aa4accba02390777d04eeb" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-3.8 – Rate Adjustment", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.8%20Rate%20Adjustment.docx?d=wcb52892fca49482c8edd3f3d5878b53b" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-4.1 – Employee Health and Safety Handbook", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-3.8%20Rate%20Adjustment.docx?d=wcb52892fca49482c8edd3f3d5878b53b" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-4.2 – Health and Safety Induction Presentation", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-4.2%20Health%20and%20Safety%20Induction%20Presentation.pptx?d=w47ac428138a8452bb468c2acdfaee722" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-4.3 – Health and Safety Induction Questionnaire", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-4.3%20Health%20and%20Safety%20Induction%20Questionnaire.docx?d=w2940e77672ea4949a1cecb3ea0f4696e" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-4.4 – Personal Protective Equipment Register", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-4.4%20Personal%20Protective%20Equipment%20Register.docx?d=w06ee469b943e410f83660fd206515a1d" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-4.6 – Timesheet", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-4.6%20Timesheet.xls?d=w9f348421f18e479b89979043b19de32f" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-4.8 – Personal Details", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-4.8%20Personal%20Details.docx?d=w6e3c74f3d74046bf88570a001cc2747d" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-4.9 – Supervisor Timesheet", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-4.8%20Personal%20Details.docx?d=w6e3c74f3d74046bf88570a001cc2747d" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-5.2 – Office Induction Checklist", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-5.2%20Office%20Induction%20Checklist.docx?d=w9c73b9c3d1784ad9a299abd97881ab62" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-6.1 – Probation Review – Labourers and Operators", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-6.1%20Probation%20Review%20-%20Labourers%20and%20Operators.docx?d=w64c4b68d19c6424d91efc1a15bb7b5d0" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-6.2 – Key Result Area Establishment", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-6.2%20Key%20Result%20Area%20Establishment.docx?d=w7821eef401b446f4b820269bd88b2850" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-6.3 – Performance Appraisal", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-6.3%20Performance%20Appraisal.docx?d=w5ea130979ec3473da3b2bf67c4ade47e" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-7.2 – Performance Development Plan", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-7.2%20Performance%20Development%20Plan.docx?d=we01951d82096485abce58c50ab523002" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-8.1 – Leave Request", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-8.1%20Leave%20Request.docx?d=weec78f9a8e734c70b223ccd410b8b944" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-8.2 – Parental Leave Notification", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-8.2%20Parental%20Leave%20Notification.docx?d=w4c3d95624f72449c87ee10a8616185c2" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-8.3 – Parental Leave Checklist", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-8.3%20Parental%20Leave%20Checklist.docx?d=w8ea2a2c9eb6a4c08af4d0914640b4043" },
				{ type: "HR Documentation", title: "WINBMS-SP-04-A-9.2 – Exit Interview", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/WINBMS-SP-04-A-9.2%20Exit%20Interview.docx?d=wf3985623b89f4b56b815efa9fc5ea354" },

				{ type: "IT", title: "IT Software Enhancement Form", url: "https://app.smartsheet.com/b/form/3ea924ba86ed4ad6969f4625dea413ae" },
				{ type: "IT", title: "My Hub Support", url: "https://forms.office.com/Pages/ResponsePage.aspx?id=T0Bg1EFpmUOgpZIS-ewVkRCZuUzeRzZGuYwtFgIXGMlURFoyVExSQzhJMEdTSDlZMlFDMFI5T0tLTy4u" },

				{ type: "HR Quick Links", title: "Winslow Company Induction", url: "https://www.winslow.com.au/Induction/" },
				{ type: "HR Quick Links", title: "Winslow Timesheet", url: "http://apps.winslowconst.com.au/TS/Pages/Home.aspx" },
				{ type: "HR Quick Links", title: "PageUp Portal", url: "https://winslowportal.pageuppeople.com/" },
				{ type: "HR Quick Links", title: "JobFit Medimanager", url: "https://winslowportal.pageuppeople.com/" },
				{ type: "HR Quick Links", title: "Winslow IT Service Desk", url: "https://winslow.it-team.com.au/support/home" },
				{ type: "HR Quick Links", title: "Fair Work Commission", url: "https://www.fwc.gov.au/" },
				{ type: "HR Quick Links", title: "Fair Work Ombudsman", url: "http://www.fairwork.gov.au/" },
				{ type: "HR Quick Links", title: "Fair Work Act 2009", url: "https://www.fwc.gov.au/about-us/legislation-regulations/fair-work-act-2009" },
				{ type: "HR Quick Links", title: "MA000020 Building and Construction General On-Site Award", url: "https://www.fwc.gov.au/documents/documents/modern_awards/award/ma000020/default.htm" },
				{ type: "HR Quick Links", title: "MA000089 Vehicle Manufacturing, Repair, Services, and Retail Award", url: "https://www.fwc.gov.au/documents/documents/modern_awards/award/ma000089/default.htm" },
				{ type: "HR Quick Links", title: "MA000066 Surveying Award", url: "http://awardviewer.fwo.gov.au/award/show/MA000066" },
				{ type: "HR Quick Links", title: "Superannuation (Super) Choice Form", url: "https://www.ato.gov.au/uploadedFiles/Content/SPR/downloads/SUPER17983Superannuation_standard_choice_form.pdf" },
				{ type: "HR Quick Links", title: "HSE Leadership", url: "https://winslow50.sharepoint.com/support-services/HR/Documents/HSE%20Leadership%20What%20You%20Need%20To%20Know%20And%20Do%20V2.pdf" },
			];

			this.getView().setBusy(true);
			this.getView().attachModelContextChange(this._onModelArrival, this);
			this._onModelArrival();
		},
		_onModelArrival: function () {
			debugger;
			// Get the model from the Component
			var oODataModel = this.getOwnerComponent().getModel();

			// Check if the model is defined yet
			if (oODataModel) {
				// 3. Success! Stop listening so this doesn't run again
				this.getView().detachModelContextChange(this._onModelArrival, this);

				// 4. Wait for metadata to be ready before calling .read()
				oODataModel.metadataLoaded().then(function () {
					this._loadData();
				}.bind(this));
			}
		},
		onTilePress: function (oEvent) {
			debugger;
			const ctx = oEvent.getSource().getBindingContext("tiles");
			const url = ctx.getProperty("url");

			if (url) {
				sap.m.URLHelper.redirect(url, true);
			} else {
				sap.m.MessageToast.show("No URL configured for this document");
			}
		},

		_loadData: function () {
			debugger;
			var url = window.location.href;
			var id = url.split("workpage_tabs/")[1].split("?")[0];
			const oView = this.getView();
			oView.setBusy(true);
			this.getOwnerComponent().getModel("JAM").read(`/NavTabs('${id}')`, {
				success: function (oData) {
					debugger;
					var tileData = this.TileData.filter(i => i.type === oData.Title);
					let oModel = new JSONModel({ tiles: tileData });
					this.getView().setModel(oModel, "tiles");
					oView.setBusy(false);
				}.bind(this),
				error: function (oError) {
					debugger;
					MessageToast.show("Error fetching NavTabs, check console logs for more details");
					oView.setBusy(false);
				}
			});
		},

	});
});