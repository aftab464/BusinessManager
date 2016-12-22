var sectionNames = {
    LevelAssessment: "LevelAssessment",
    Data: "Data",
    DesignAndTesting: "DesignAndTesting",
    ClinicalAssuranceAndEfficacy: "ClinicalAssuranceAndEfficacy",
    UserExperience: "UserExperience",
    AppInfo: "AppInfo"
}


var showInReport = [];

var LevelAssessmentAnswers =
{

    "LF01":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF02":
    {
        answer: 0,
        enabled: true,
        comments: null

    }
,
    "LF03":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF04":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF05":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF06":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF07":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF08":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF09":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF10":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF11":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF12":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
    ,

    "LF13":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF14":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF15":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF16":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF17":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF18":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF19":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF20":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF21":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF22":
    {
        answer: 0,
        enabled: true,
        comments: null
    },

    "LF23":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF24":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
,
    "LF25":
    {
        answer: 0,
        enabled: true,
        comments: null
    }
};


var DataAnswers =
{

    "D01":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D02":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0

    }
,
    "D03":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D04":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D05":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D06":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D05",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D07":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0

    }
,
    "D08":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D07",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D09":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D10":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0
    }
    ,
    "D10.5":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D11":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D12":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
    ,

    "D13":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D14":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D15":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D16":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D17":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D18":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D19":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D20":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D21":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D22":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    },

    "D23":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D24":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D11",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D25":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5",
        riskAmount: 0,
        valueAmount: 0
    },
    "D26":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D27":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5,D26",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D28":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,D10.5",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D29":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D30":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0,
        parents: "D01"
    }
,
    "D31":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D29,D30",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "D32":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D29,D30",
        riskAmount: 0,
        valueAmount: 0
    }
};

var DesignAndTestingAnswers =
{

    "DT01":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "DT02":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0

    }
,
    "DT03":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "DT04":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "DT05":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,LF08,LF09,LF10,LF11,LF12,LF13,LF14,LF15,LF16",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "DT06":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,LF08,LF09,LF10,LF11,LF12,LF13,LF14,LF15,LF16",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "DT07":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,LF08,LF09,LF10,LF11,LF12,LF13,LF14,LF15,LF16",
        riskAmount: 0,
        valueAmount: 0

    }
,
    "DT08":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "D01,LF08,LF09,LF10,LF11,LF12,LF13,LF14,LF15,LF16",
        riskAmount: 0,
        valueAmount: 0
    }
};


var ClinicalAssuranceAndEfficacyAnswers =
{

    "AE01":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "LF10,LF12,LF14,LF21,LF22,LF23,LF24",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "AE02":
     {
         answer: 0,
         enabled: true,
         comments: null,
         riskAmount: 0,
         valueAmount: 0
     }
,
    "AE03":
        {
            answer: 0,
            enabled: true,
            comments: null,
            parents: "LF06,LF07,LF10,LF14,LF21,LF22,LF23,LF24,LF25",
            riskAmount: 0,
            valueAmount: 0
        }
,
    "AE04":
        {
            answer: 0,
            enabled: true,
            comments: null,
            parents: "LF06,LF07,LF10,LF14,LF21,LF22,LF23,LF24,LF25",
            riskAmount: 0,
            valueAmount: 0
        }
,
    "AE05":
        {
            answer: 0,
            enabled: true,
            comments: null,
            riskAmount: 0,
            valueAmount: 0
        }

};


var UserExperienceAnswers =
{

    "U01":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U02":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0

    }
,
    "U03":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "U02",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U04":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "U02",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U05":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "U02",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U06":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "U02",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U07":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "U02",
        riskAmount: 0,
        valueAmount: 0

    }
,
    "U08":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "U02",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U09":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U10":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U11":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U12":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "LF16,LF18,LF19,LF20",
        riskAmount: 0,
        valueAmount: 0
    }
    ,

    "U13":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "LF06,LF07",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U14":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U15":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "U14",
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U16":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U17":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U18":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U19":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U20":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U21":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U22":
    {
        answer: 0,
        enabled: true,
        comments: null,
        parents: "LF19,LF20",
        riskAmount: 0,
        valueAmount: 0
    },

    "U23":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U24":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
,
    "U25":
    {
        answer: 0,
        enabled: true,
        comments: null,
        riskAmount: 0,
        valueAmount: 0
    }
};

var levelNames = {
    NoLevel: { Name: "?", Value: 0 },
    Level1: { Name: "Well-Being", Value: 1 },
    Level2: { Name: "Self Managed", Value: 2 },
    Level3: { Name: "Profressional led", Value: 3 },
    Level4: { Name: "Practitioner", Value: 4 }

}

var orchaAssessmentValues = {
    LevelAssessment: {
        Level: { Name: "?", Value: 0 },
        MarkCE: false,
        IsLevel34Logic: false,
        FunctionCapabilities: {
            EductionAndInformation: false,
            SelfMonitoring: false,
            AutoMonitoring: false,
            CareSupport: false,
            PersonalisedGuidance: false,
            ProfessionalGuidance: false
        },
        TotalQuestions: 0
    },
    Data: {
        RiskScore: 0,
        RiskOutOfPossible: 88,
        ValueScore: 0,
        ValueOutOfPossible: 0,
        TotalQuestions: 0,
        RiskAllocationOfTotalScore: 40,
        ValueAllocationOfTotalScore: 15,
        RiskScoreOutOfAllocation: 0,
        ValueScoreOutOfAllocation: 0,
        SectionSummary: ""
    },
    DesignAndTesting: {
        RiskScore: 0,
        RiskOutOfPossible: 3,
        ValueScore: 0,
        ValueOutOfPossible: 0,
        TotalQuestions: 0,
        RiskAllocationOfTotalScore: 10,
        ValueAllocationOfTotalScore: 15,
        RiskScoreOutOfAllocation: 0,
        ValueScoreOutOfAllocation: 0,
        SectionSummary: ""
    },
    ClinicalAssuranceAndEfficacy: {
        RiskScore: 0,
        RiskOutOfPossible: 11,
        ValueScore: 0,
        ValueOutOfPossible: 0,
        TotalQuestions: 0,
        RiskAllocationOfTotalScore: 30,
        ValueAllocationOfTotalScore: 15,
        RiskScoreOutOfAllocation: 0,
        ValueScoreOutOfAllocation: 0,
        SectionSummary: ""
    },
    UserExperience: {
        RiskScore: 0,
        RiskOutOfPossible: 12,
        ValueScore: 0,
        ValueOutOfPossible: 0,
        TotalQuestions: 0,
        RiskAllocationOfTotalScore: 20,
        ValueAllocationOfTotalScore: 35,
        RiskScoreOutOfAllocation: 0,
        ValueScoreOutOfAllocation: 0,
        SectionSummary: ""
    },
    UserScoreContribution: {
        NoOfDownloads: 0,
        NoOfReviews: 0,
        AverageRating: 0,
        NoOfReviewsTotalValue: 0,
        NoOfDownloadTotalValue: 0,
        NoOfAverageReviewsTotalValue: 0,
        ValueAllocationOfTotalScore: 20,
        ValueScoreOutOfAllocation: 0
    },
    CalculatedValues: {
        TotalQuestions: 0,
        TotalSheetRisk: 0,
        TotalActualRisk: 0,
        TotalSheetValue: 0,
        TotalActualValue: 0
    },
    MiscellaneousValues: {
        OpeningNotes: "",
        ReviewSummary: "",
        Categories: "",
        Platfrom: 0
    }

}
var functionCapabilitiesNames = {
    EductionAndInformation: { Name: "Education and information" },
    SelfMonitoring: { Name: "Self monitoring" },
    AutoMonitoring: { Name: "Auto Monitoring" },
    CareSupport: { Name: "Care Support" },
    PersonalisedGuidance: { Name: "Personalised Guidance" },
    ProfessionalGuidance: { Name: "Professional Guidance" }
}

function riskvalueToConsider() {


    setRiskIfAmount(sectionNames.Data, ["D01"]);

    if (DataAnswers.D01.answer == 1) {
        setRiskIfAmount(sectionNames.Data, ["D02", "D03", "D04", "D05", "D07", "D09", "D10"]);
        setValueIfAmount(sectionNames.Data, ["D05", "D07", "D09", "D10"]);
    }
    else {
        setRiskElseAmount(sectionNames.Data, ["D02", "D03", "D04", "D05", "D07", "D09", "D10"]);
        setValueElseAmount(sectionNames.Data, ["D05", "D07", "D09", "D10"]);
    }
    if (DataAnswers.D01.answer == 1 && (DataAnswers.D05.enabled == true && DataAnswers.D05.answer == 1)) {
        setRiskIfAmount(sectionNames.Data, ["D06"]);
        setValueIfAmount(sectionNames.Data, ["D06"]);
    } else {
        setRiskElseAmount(sectionNames.Data, ["D06"]);
        setValueElseAmount(sectionNames.Data, ["D06"]);
    }

    if (DataAnswers.D01.answer == 1 && DataAnswers.D07.answer == 1) {
        setRiskIfAmount(sectionNames.Data, ["D08"]);
    } else {
        setRiskElseAmount(sectionNames.Data, ["D08"]);
    }

    if (DataAnswers.D01.answer == 1 && DataAnswers["D10.5"].answer == 2) {
        setRiskIfAmount(sectionNames.Data, ["D11", "D26", "D28"]);
        setValueIfAmount(sectionNames.Data, ["D11", "D26", "D28", "D25"]);

    } else {
        setRiskElseAmount(sectionNames.Data, ["D11", "D26", "D28"]);
        setValueElseAmount(sectionNames.Data, ["D11", "D26", "D28", "D25"]);

    }

    if (DataAnswers.D11.enabled == true && DataAnswers.D11.answer == 1) {
        setRiskIfAmount(sectionNames.Data, ["D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24"]);
        setValueIfAmount(sectionNames.Data, ["D12", "D13", "D15", "D16", "D17", "D18", "D21", "D22", "D23"]);
    }
    else {
        setRiskElseAmount(sectionNames.Data, ["D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24"]);
        setValueElseAmount(sectionNames.Data, ["D12", "D13", "D15", "D16", "D17", "D18", "D21", "D22", "D23"]);
    }

    if (DataAnswers.D26.enabled == true && DataAnswers.D26.answer == 1) {
        setRiskIfAmount(sectionNames.Data, ["D27"]);
        setValueIfAmount(sectionNames.Data, ["D27"]);
    }
    else {
        setRiskElseAmount(sectionNames.Data, ["D27"]);
        setValueElseAmount(sectionNames.Data, ["D27"]);
    }
    if ((LevelAssessmentAnswers.LF07.answer == 1 || LevelAssessmentAnswers.LF08.answer == 1 || LevelAssessmentAnswers.LF09.answer == 1 || LevelAssessmentAnswers.LF10.answer == 1 || LevelAssessmentAnswers.LF11.answer == 1 || LevelAssessmentAnswers.LF12.answer == 1 || LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF15.answer == 1 || LevelAssessmentAnswers.LF16.answer == 1)) {

        setValueIfAmount(sectionNames.Data, ["D29"]);
    }
    else {

        setValueElseAmount(sectionNames.Data, ["D29"]);
    }


    if (DataAnswers.D01.answer == 1 && (LevelAssessmentAnswers.LF07.answer == 1 || LevelAssessmentAnswers.LF08.answer == 1 || LevelAssessmentAnswers.LF09.answer == 1 || LevelAssessmentAnswers.LF10.answer == 1 || LevelAssessmentAnswers.LF11.answer == 1 || LevelAssessmentAnswers.LF12.answer == 1 || LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF15.answer == 1 || LevelAssessmentAnswers.LF16.answer == 1)) {

        setValueIfAmount(sectionNames.Data, ["D30"]);
    }
    else {

        setValueElseAmount(sectionNames.Data, ["D30"]);
    }

    if ((DataAnswers.D29.enabled == true && DataAnswers.D29.answer == 1) || (DataAnswers.D30.enabled == true && DataAnswers.D30.answer == 1)) {
        setRiskIfAmount(sectionNames.Data, ["D31", "D32"]);
        setValueIfAmount(sectionNames.Data, ["D31", "D32"]);
    }
    else {
        setRiskElseAmount(sectionNames.Data, ["D31", "D32"]);
        setValueElseAmount(sectionNames.Data, ["D31", "D32"]);
    }

    setValueIfAmount(sectionNames.DesignAndTesting, ["DT01", "DT02", "DT03", "DT04"]);
    setRiskIfAmount(sectionNames.DesignAndTesting, ["DT04"]);


    // need to put review audit stamp
    if (DataAnswers.D01.answer == 1 && orchaAssessmentValues.MiscellaneousValues.Platfrom == 1 && (LevelAssessmentAnswers.LF08.answer == 1 || LevelAssessmentAnswers.LF09.answer == 1 || LevelAssessmentAnswers.LF10.answer == 1 || LevelAssessmentAnswers.LF11.answer == 1 || LevelAssessmentAnswers.LF12.answer == 1 || LevelAssessmentAnswers.LF13.answer == 1 || LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF15.answer == 1 || LevelAssessmentAnswers.LF16.answer == 1)) {

        setValueIfAmount(sectionNames.DesignAndTesting, ["DT05", "DT06"]);
    }
    else {

        setValueElseAmount(sectionNames.DesignAndTesting, ["DT05", "DT06"]);
    }

    if (DataAnswers.D01.answer == 1 && orchaAssessmentValues.MiscellaneousValues.Platfrom == 2 && (LevelAssessmentAnswers.LF08.answer == 1 || LevelAssessmentAnswers.LF09.answer == 1 || LevelAssessmentAnswers.LF10.answer == 1 || LevelAssessmentAnswers.LF11.answer == 1 || LevelAssessmentAnswers.LF12.answer == 1 || LevelAssessmentAnswers.LF13.answer == 1 || LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF15.answer == 1 || LevelAssessmentAnswers.LF16.answer == 1)) {

        setValueIfAmount(sectionNames.DesignAndTesting, ["DT07"]);
    }
    else {

        setValueElseAmount(sectionNames.DesignAndTesting, ["DT07"]);
    }

    if (DataAnswers.D01.answer == 1 && (LevelAssessmentAnswers.LF08.answer == 1 || LevelAssessmentAnswers.LF09.answer == 1 || LevelAssessmentAnswers.LF10.answer == 1 || LevelAssessmentAnswers.LF11.answer == 1 || LevelAssessmentAnswers.LF12.answer == 1 || LevelAssessmentAnswers.LF13.answer == 1 || LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF15.answer == 1 || LevelAssessmentAnswers.LF16.answer == 1)) {

        setValueIfAmount(sectionNames.DesignAndTesting, ["DT08"]);
    }
    else {

        setValueElseAmount(sectionNames.DesignAndTesting, ["DT08"]);
    }

    if (LevelAssessmentAnswers.LF10.answer == 1 || LevelAssessmentAnswers.LF12.answer == 1 || LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF21.answer == 1 || LevelAssessmentAnswers.LF22.answer == 1 || LevelAssessmentAnswers.LF23.answer == 1 || LevelAssessmentAnswers.LF24.answer == 1) {
        setRiskIfAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE01"]);
        setValueIfAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE01"]);
    } else {
        setRiskElseAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE01"]);
        setValueElseAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE01"]);
    }



    setRiskIfAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE02"]);
    setValueIfAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE02"]);

    if (LevelAssessmentAnswers.LF06.answer == 1 || LevelAssessmentAnswers.LF07.answer == 1 || LevelAssessmentAnswers.LF10.answer == 1 || LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF21.answer == 1 || LevelAssessmentAnswers.LF22.answer == 1 || LevelAssessmentAnswers.LF23.answer == 1 || LevelAssessmentAnswers.LF24.answer == 1 || LevelAssessmentAnswers.LF25.answer == 1) {
        setRiskIfAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE03", "AE04"]);
        setValueIfAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE03", "AE04"]);
    } else {
        setRiskElseAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE03", "AE04"]);
        setValueElseAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE03", "AE04"]);
    }

    setValueIfAmount(sectionNames.ClinicalAssuranceAndEfficacy, ["AE05"]);

 
    setValueIfAmount(sectionNames.UserExperience, ["U01", "U02"]);
    if (UserExperienceAnswers.U02.answer == 1) {
        setValueIfAmount(sectionNames.UserExperience, ["U03", "U04", "U05", "U06", "U07", "U08"]);
    }
    else {
        setValueElseAmount(sectionNames.UserExperience, ["U03", "U04", "U05", "U06", "U07", "U08"]);
    }
    setValueIfAmount(sectionNames.UserExperience, ["U09", "U10", "U11"]);

    if (LevelAssessmentAnswers.LF16.answer == 1 || LevelAssessmentAnswers.LF18.answer == 1 || LevelAssessmentAnswers.LF19.answer == 1 || LevelAssessmentAnswers.LF20.answer == 1) {
        setValueIfAmount(sectionNames.UserExperience, ["U12"]);

    } else {
        setValueElseAmount(sectionNames.UserExperience, ["U12"]);
    }

    if (LevelAssessmentAnswers.LF06.answer == 1 || LevelAssessmentAnswers.LF07.answer == 1) {
        setValueIfAmount(sectionNames.UserExperience, ["U13"]);

    } else {
        setValueElseAmount(sectionNames.UserExperience, ["U13"]);
    }

    setValueIfAmount(sectionNames.UserExperience, ["U14"]);

    if (UserExperienceAnswers.U14.answer == 1) {
        setRiskIfAmount(sectionNames.UserExperience, ["U15"]);
        setValueIfAmount(sectionNames.UserExperience, ["U15"]);

    } else {
        setRiskElseAmount(sectionNames.UserExperience, ["U15"]);
        setValueElseAmount(sectionNames.UserExperience, ["U15"]);
    }
    setValueIfAmount(sectionNames.UserExperience, ["U16", "U17", "U18", "U19", "U20", "U21"]);
    if (LevelAssessmentAnswers.LF19.answer == 1 || LevelAssessmentAnswers.LF20.answer == 1) {
        setRiskIfAmount(sectionNames.UserExperience, ["U22"]);
        setValueIfAmount(sectionNames.UserExperience, ["U22"]);

    } else {
        setRiskElseAmount(sectionNames.UserExperience, ["U22"]);
        setValueElseAmount(sectionNames.UserExperience, ["U22"]);
    }
    setRiskIfAmount(sectionNames.UserExperience, ["U23"]);
    setValueIfAmount(sectionNames.UserExperience, ["U23", "U24", "U25"]);


    //dataSection.D03.riskAmount = dataSection.D01.answer == 1 ? getRiskIfAmount("D03") : getRiskElseAmount("D03");
}

function setRiskIfAmount(sectionName, questionCodes) {

    questionCodes.forEach(function (questionCode) {

        window[sectionName + "Answers"][questionCode].riskAmount = $('div.yesnoBtn[data-question-code="' + questionCode + '"]').data().riskAmountIf;
        console.log("Question Code : " + questionCode + " risk amount if " + window[sectionName + "Answers"][questionCode].riskAmount);
    }, this);


}
function setRiskElseAmount(sectionName, questionCodes) {
    questionCodes.forEach(function (questionCode) {
        window[sectionName + "Answers"][questionCode].riskAmount = $('div.yesnoBtn[data-question-code="' + questionCode + '"]').data().riskAmountElse;
        console.log("Question Code : " + questionCode + " risk amount else " + window[sectionName + "Answers"][questionCode].riskAmount);
    }, this);

}
function setValueIfAmount(sectionName, questionCodes) {
    questionCodes.forEach(function (questionCode) {
        window[sectionName + "Answers"][questionCode].valueAmount = $('div.yesnoBtn[data-question-code="' + questionCode + '"]').data().valueAmountIf;
        console.log("Question Code : " + questionCode + " value amount if " + window[sectionName + "Answers"][questionCode].valueAmount);
    }, this);

}
function setValueElseAmount(sectionName, questionCodes) {
    questionCodes.forEach(function (questionCode) {
        window[sectionName + "Answers"][questionCode].valueAmount = $('div.yesnoBtn[data-question-code="' + questionCode + '"]').data().valueAmountElse;
        console.log("Question Code : " + questionCode + " value amount else " + window[sectionName + "Answers"][questionCode].valueAmount);
    }, this);

}

function checkingNotApplicableQuestions() {
    //Data section question
    //=$B$3,$B$4,$B$5,$B$6,$B$8,$B$10,$B$11,$B$12
    DataAnswers.D01.answer == 2 ? setEnabledDisableValue(sectionNames.Data, ["D02", "D03", "D04", "D05", "D07", "D09", "D10", "D10.5", "D30"], false) : setEnabledDisableValue(sectionNames.Data, ["D02", "D03", "D04", "D05", "D07", "D09", "D10", "D10.5", "D30"], true);

    (DataAnswers.D01.answer == 2 || (DataAnswers.D05.enabled == true && DataAnswers.D05.answer == 2)) ? setEnabledDisableValue(sectionNames.Data, ["D06"], false) : setEnabledDisableValue(sectionNames.Data, ["D06"], true);

    (DataAnswers.D01.answer == 2 || (DataAnswers.D07.enabled == true && DataAnswers.D07.answer == 2)) ? setEnabledDisableValue(sectionNames.Data, ["D08"], false) : setEnabledDisableValue(sectionNames.Data, ["D08"], true);

    (DataAnswers.D01.answer == 2 || DataAnswers["D10.5"].answer == 1) ? setEnabledDisableValue(sectionNames.Data, ["D11", "D28", "D25", "D26"], false) : setEnabledDisableValue(sectionNames.Data, ["D11", "D28", "D25", "D26"], true);

    // (DataAnswers.D01.answer == 2 || DataAnswers["D10.5"].answer == 2) ? setEnabledDisableValue(sectionNames.Data, [ "D28"], false) : setEnabledDisableValue(sectionNames.Data, [ "D28"], true);
    (DataAnswers.D01.answer == 2 || DataAnswers["D10.5"].answer == 1 || DataAnswers.D11.answer == 2) ? setEnabledDisableValue(sectionNames.Data, ["D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24"], false) : setEnabledDisableValue(sectionNames.Data, ["D12", "D13", "D14", "D15", "D16", "D17", "D18", "D19", "D20", "D21", "D22", "D23", "D24"], true);




    (DataAnswers.D01.answer == 2 || DataAnswers["D10.5"].answer == 1 || DataAnswers.D26.answer == 2) ? setEnabledDisableValue(sectionNames.Data, ["D27"], false) : setEnabledDisableValue(sectionNames.Data, ["D27"], true);

    (DataAnswers.D29.answer == 2) && ((DataAnswers.D30.enabled == true && DataAnswers.D30.answer == 2) || DataAnswers.D30.enabled == false) ? setEnabledDisableValue(sectionNames.Data, ["D31", "D32"], false) : setEnabledDisableValue(sectionNames.Data, ["D31", "D32"], true);



    // Design and Testing section question
    //=OR('Review Audit Stamp'!$D$8=2,AND('LEVEL, FUNCTION & FEATURES'!$E$11=2,'LEVEL, FUNCTION & FEATURES'!$E$12=2,'LEVEL, FUNCTION & FEATURES'!$E$13=2,'LEVEL, FUNCTION & FEATURES'!$E$14=2,'LEVEL, FUNCTION & FEATURES'!$E$15=2,'LEVEL, FUNCTION & FEATURES'!$E$16=2,'LEVEL, FUNCTION & FEATURES'!$E$17=2,'LEVEL, FUNCTION & FEATURES'!$E$18=2,'LEVEL, FUNCTION & FEATURES'!$E$19=2))
    //=OR('Review Audit Stamp'!$D$8=2,AND('LEVEL, FUNCTION & FEATURES'!$E$11=2,'LEVEL, FUNCTION & FEATURES'!$E$12=2,'LEVEL, FUNCTION & FEATURES'!$E$13=2,'LEVEL, FUNCTION & FEATURES'!$E$14=2,'LEVEL, FUNCTION & FEATURES'!$E$15=2,'LEVEL, FUNCTION & FEATURES'!$E$16=2,'LEVEL, FUNCTION & FEATURES'!$E$17=2,'LEVEL, FUNCTION & FEATURES'!$E$18=2,'LEVEL, FUNCTION & FEATURES'!$E$19=2))
    //=OR('Review Audit Stamp'!$D$8=1,AND('LEVEL, FUNCTION & FEATURES'!$E$11=2,'LEVEL, FUNCTION & FEATURES'!$E$12=2,'LEVEL, FUNCTION & FEATURES'!$E$13=2,'LEVEL, FUNCTION & FEATURES'!$E$14=2,'LEVEL, FUNCTION & FEATURES'!$E$15=2,'LEVEL, FUNCTION & FEATURES'!$E$16=2,'LEVEL, FUNCTION & FEATURES'!$E$17=2,'LEVEL, FUNCTION & FEATURES'!$E$18=2,'LEVEL, FUNCTION & FEATURES'!$E$19=2))
    //=------------------------------=AND('LEVEL, FUNCTION & FEATURES'!$E$11=2,'LEVEL, FUNCTION & FEATURES'!$E$12=2,'LEVEL, FUNCTION & FEATURES'!$E$13=2,'LEVEL, FUNCTION & FEATURES'!$E$14=2,'LEVEL, FUNCTION & FEATURES'!$E$15=2,'LEVEL, FUNCTION & FEATURES'!$E$16=2,'LEVEL, FUNCTION & FEATURES'!$E$17=2,'LEVEL, FUNCTION & FEATURES'!$E$18=2,'LEVEL, FUNCTION & FEATURES'!$E$19=2)
    // These question are dependent on level assessment sheet
    //these formula are also dependent on Review audit stamp
    orchaAssessmentValues.MiscellaneousValues.Platfrom == 2 || DataAnswers.D01.answer == 2 || (LevelAssessmentAnswers.LF08.answer == 2 && LevelAssessmentAnswers.LF09.answer == 2 && LevelAssessmentAnswers.LF10.answer == 2 && LevelAssessmentAnswers.LF11.answer == 2 && LevelAssessmentAnswers.LF12.answer == 2 && LevelAssessmentAnswers.LF13.answer == 2 && LevelAssessmentAnswers.LF14.answer == 2 && LevelAssessmentAnswers.LF15.answer == 2 && LevelAssessmentAnswers.LF16.answer == 2) ? setEnabledDisableValue(sectionNames.DesignAndTesting, ["DT05", "DT06"], false) : setEnabledDisableValue(sectionNames.DesignAndTesting, ["DT05", "DT06"], true);

    orchaAssessmentValues.MiscellaneousValues.Platfrom == 1 || DataAnswers.D01.answer == 2 || (LevelAssessmentAnswers.LF08.answer == 2 && LevelAssessmentAnswers.LF09.answer == 2 && LevelAssessmentAnswers.LF10.answer == 2 && LevelAssessmentAnswers.LF11.answer == 2 && LevelAssessmentAnswers.LF12.answer == 2 && LevelAssessmentAnswers.LF13.answer == 2 && LevelAssessmentAnswers.LF14.answer == 2 && LevelAssessmentAnswers.LF15.answer == 2 && LevelAssessmentAnswers.LF16.answer == 2) ? setEnabledDisableValue(sectionNames.DesignAndTesting, ["DT07"], false) : setEnabledDisableValue(sectionNames.DesignAndTesting, ["DT07"], true);
    DataAnswers.D01.answer == 2 || (LevelAssessmentAnswers.LF08.answer == 2 && LevelAssessmentAnswers.LF09.answer == 2 && LevelAssessmentAnswers.LF10.answer == 2 && LevelAssessmentAnswers.LF11.answer == 2 && LevelAssessmentAnswers.LF12.answer == 2 && LevelAssessmentAnswers.LF13.answer == 2 && LevelAssessmentAnswers.LF14.answer == 2 && LevelAssessmentAnswers.LF15.answer == 2 && LevelAssessmentAnswers.LF16.answer == 2) ? setEnabledDisableValue(sectionNames.DesignAndTesting, ["DT08"], false) : setEnabledDisableValue(sectionNames.DesignAndTesting, ["DT08"], true);



    // Clinical Assurance and Efficacy section question
    // These question are dependent on level assessment sheet

    //=AND('LEVEL, FUNCTION & FEATURES'!$E$13=2,'LEVEL, FUNCTION & FEATURES'!$E$15=2,'LEVEL, FUNCTION & FEATURES'!$E$17=2,'LEVEL, FUNCTION & FEATURES'!$E$24=2,'LEVEL, FUNCTION & FEATURES'!$E$25=2,'LEVEL, FUNCTION & FEATURES'!$E$26=2,'LEVEL, FUNCTION & FEATURES'!$E$27=2)
    (LevelAssessmentAnswers.LF10.answer == 2 && LevelAssessmentAnswers.LF12.answer == 2 && LevelAssessmentAnswers.LF14.answer == 2 && LevelAssessmentAnswers.LF21.answer == 2 && LevelAssessmentAnswers.LF22.answer == 2 && LevelAssessmentAnswers.LF23.answer == 2 && LevelAssessmentAnswers.LF24.answer == 2) ? setEnabledDisableValue(sectionNames.ClinicalAssuranceAndEfficacy, ["AE01"], false) : setEnabledDisableValue(sectionNames.ClinicalAssuranceAndEfficacy, ["AE01"], true);
    // These question are dependent on level assessment sheet
    //=AND('LEVEL, FUNCTION & FEATURES'!E9=2, 'LEVEL, FUNCTION & FEATURES'!E10=2,'LEVEL, FUNCTION & FEATURES'!E13=2,'LEVEL, FUNCTION & FEATURES'!E17=2,'LEVEL, FUNCTION & FEATURES'!E24=2,'LEVEL, FUNCTION & FEATURES'!E25=2,'LEVEL, FUNCTION & FEATURES'!E26=2,'LEVEL, FUNCTION & FEATURES'!E27=2,'LEVEL, FUNCTION & FEATURES'!E28=2)
    (LevelAssessmentAnswers.LF06.answer == 2 && LevelAssessmentAnswers.LF07.answer == 2 && LevelAssessmentAnswers.LF10.answer == 2 && LevelAssessmentAnswers.LF14.answer == 2 && LevelAssessmentAnswers.LF21.answer == 2 && LevelAssessmentAnswers.LF22.answer == 2 && LevelAssessmentAnswers.LF23.answer == 2 && LevelAssessmentAnswers.LF24.answer == 2 && LevelAssessmentAnswers.LF25.answer == 2) ? setEnabledDisableValue(sectionNames.ClinicalAssuranceAndEfficacy, ["AE03", "AE04"], false) : setEnabledDisableValue(sectionNames.ClinicalAssuranceAndEfficacy, ["AE03", "AE04"], true);




    //User Experience section question
    UserExperienceAnswers.U02.answer == 2 ? setEnabledDisableValue(sectionNames.UserExperience, ["U03", "U04", "U05", "U06", "U07", "U08"], false) : setEnabledDisableValue(sectionNames.UserExperience, ["U03", "U04", "U05", "U06", "U07", "U08"], true);
    // these question are dependent on level assessment
    //="AND('LEVEL, FUNCTION & FEATURES'!$E$19=2,'LEVEL, FUNCTION & FEATURES'!$E$21=2,'LEVEL, FUNCTION & FEATURES'!$E$22=2,'LEVEL, FUNCTION & FEATURES'!$E$23=2)"
    //=AND('LEVEL, FUNCTION & FEATURES'!$E$19=2,'LEVEL, FUNCTION & FEATURES'!$E$21=2,'LEVEL, FUNCTION & FEATURES'!$E$22=2,'LEVEL, FUNCTION & FEATURES'!$E$23=2)
    LevelAssessmentAnswers.LF16.answer == 2 && LevelAssessmentAnswers.LF18.answer == 2 && LevelAssessmentAnswers.LF19.answer == 2 && LevelAssessmentAnswers.LF20.answer == 2 ? setEnabledDisableValue(sectionNames.UserExperience, ["U12"], false) : setEnabledDisableValue(sectionNames.UserExperience, ["U12"], true);
    //="AND('LEVEL, FUNCTION & FEATURES'!$E$9=2,'LEVEL, FUNCTION & FEATURES'!$E$10=2)"
    LevelAssessmentAnswers.LF06.answer == 2 && LevelAssessmentAnswers.LF07.answer == 2 ? setEnabledDisableValue(sectionNames.UserExperience, ["U13"], false) : setEnabledDisableValue(sectionNames.UserExperience, ["U13"], true);

    UserExperienceAnswers.U14.answer == 2 ? setEnabledDisableValue(sectionNames.UserExperience, ["U15"], false) : setEnabledDisableValue(sectionNames.UserExperience, ["U15"], true);
    // This question dependent on level assessment
    //=AND('LEVEL, FUNCTION & FEATURES'!$E$22=2,'LEVEL, FUNCTION & FEATURES'!$E$23=2)
    LevelAssessmentAnswers.LF19.answer == 2 && LevelAssessmentAnswers.LF20.answer == 2 && LevelAssessmentAnswers.LF20.answer == 2 ? setEnabledDisableValue(sectionNames.UserExperience, ["U22"], false) : setEnabledDisableValue(sectionNames.UserExperience, ["U22"], true);

}
function enabledQuestion(sectionName) {
    var sectionAnswers = window[sectionName + "Answers"];

    var totalQuestions = 0;
    for (var questionCode in sectionAnswers) {
        if (sectionAnswers[questionCode].enabled == true) {
            totalQuestions++;
        }

    }
    orchaAssessmentValues[sectionName].TotalQuestions = totalQuestions;
    orchaAssessmentValues.CalculatedValues.TotalQuestions += totalQuestions;
}
function setMiscellaneousValues() {
    orchaAssessmentValues.MiscellaneousValues.OpeningNotes = $("#OpeningNotes").val();
    orchaAssessmentValues.MiscellaneousValues.ReviewSummary = $("#ReviewSummary").val();
}
function validateAllSections() {
    if (!validateMiscellaneousValues())
        return false;
    if (!isAllQuestionAnswered())
        return false;
    //if (!isAllSectionSummaryEntered())
    //return false;
    return true;

}
function validateMiscellaneousValues() {
    if (orchaAssessmentValues.MiscellaneousValues.Categories == "") {
        return false;
    }
    return true;
}

function isAllSectionSummaryEntered() {
    if (orchaAssessmentValues.Data.SectionSummary.trim() == "" || orchaAssessmentValues.DesignAndTesting.SectionSummary.trim() == "" || orchaAssessmentValues.ClinicalAssuranceAndEfficacy.SectionSummary.trim() == "" || orchaAssessmentValues.UserExperience.SectionSummary.trim() == "") {
        return false;
    }
    return true;
}

function isAllQuestionAnswered() {
    var isAllQuestionAnswered = true;
    if (orchaAssessmentValues.LevelAssessment.Level.Value == 0)
        return false;

    for (var sectionName in sectionNames) {
        if (sectionName != sectionNames.AppInfo) {
            for (var questionCode in window[sectionName + "Answers"]) {
                var currentQuestion = window[sectionName + "Answers"][questionCode];
                if (currentQuestion.enabled && currentQuestion.answer == 0) {
                    isAllQuestionAnswered = false;
                    break;
                }

            }

        }
        if (!isAllQuestionAnswered) {
            break;

        }
    }
    return isAllQuestionAnswered;
}

function setEnabledDisableValue(sectionName, questionCodes, isEnable) {
    if (isEnable == true) {
        questionCodes.forEach(function (questionCodeToEnable) {
            var question = window[sectionName + "Answers"][questionCodeToEnable];
            question.enabled = true;

            $('a[data-question-pointer="' + questionCodeToEnable + '"]').removeAttr("data-parent-question");
            $('div[data-question-code="' + questionCodeToEnable + '"]').parent('div[data-question-navigator="' + sectionName + '"]').removeAttr("data-parent-question"); //this code need to verify
            var answerClass = "lgIncompl"; // default class
            var answer = question.answer;
            if (answer == 1) {
                answerClass = "lgYes";
            }
            else if (answer == 2) {
                answerClass = "lgNo";
            }
            $('a[data-question-pointer="' + questionCodeToEnable + '"]').siblings('span').removeClass().addClass(answerClass);
        }, this);
    }
    else {
        questionCodes.forEach(function (questionCodeToDisable) {
            var question = window[sectionName + "Answers"][questionCodeToDisable];
            question.enabled = false;
            $('a[data-question-pointer="' + questionCodeToDisable + '"]').siblings('span').removeClass().addClass('lgNotappl');
            $('a[data-question-pointer="' + questionCodeToDisable + '"]').attr("data-parent-question", question.parents);
            $('div[data-question-code="' + questionCodeToDisable + '"]').parent('div[data-question-navigator="' + sectionName + '"]').attr("data-parent-question", question.parents);
        }, this);
    }

}



$('a.nextBtn').click(function (e) {
    nextButtonClicked(e);
});

$('a.levlNxtBtn').click(function (e) {
    nextButtonClicked(e);
});
function nextButtonClicked(e) {
    e.preventDefault();
    if (!isCurrentQuestionAnswered()) {
        return false;
    }
    if (!validateLevelSection()) {

        $('.rightCol:visible').parent().hide();
        $('div[data-section-navigator="' + sectionNames.LevelAssessment + '"]').show();
        return false;
    }
    $('div[data-question-navigator]:visible').hide().nextAll(":not([data-parent-question]):first").show();
    validatingNextPreviousBtns();

}

function isCurrentQuestionAnswered() {
    var sectionName = $('div[data-question-navigator]:visible').data('question-navigator');
    var sectionData = window[sectionName + "Answers"];
    var questionCode = $('div[data-question-navigator]:visible div[data-question-code]').data('question-code');
    if (questionCode != null && questionCode != undefined) {
        if (sectionData[questionCode].answer != 1 && sectionData[questionCode].answer != 2) {
            swal({
                title: "",
                text: "You have not completed the current question. Proceed?",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#DD6B55",
                confirmButtonText: "Yes",
                cancelButtonText: "No !",
                closeOnConfirm: true,
                closeOnCancel: true
            },
            function () {
                //if (!validateLevelSection())
                //  return false;
                //if ($('div[data-question-navigator]:visible').data('question-navigator') != SectionNames.LevelAssessment)
                // if (!validateAppInfoSection())
                //   return false;
                $('div[data-question-navigator]:visible').hide().nextAll(":not([data-parent-question]):first").show();
                //$('div[data-question-navigator]:visible').hide().next(('div').not('[data-parent-question]')).show();

                //$('span[data-section-score]').text(section.questionCounter);
                validatingNextPreviousBtns();
            });
            return false;
        }
        else {
            return true;
        }

    }
    else {
        return true;
    }

}

$('a.previousBtn').click(function (e) {
    e.preventDefault();

    $('div[data-question-navigator]:visible').hide().prevAll(":not([data-parent-question]):first").show();

    validatingNextPreviousBtns();


});

// in old version function name was "nextPreviousBtns"
function validatingNextPreviousBtns() {


    // checking first item
    if ($('div[data-question-navigator]:visible').prev('div[data-question-navigator]').length < 1) {
        $('a.previousBtn').hide();
    }
    else {
        $('a.previousBtn').show();
    }
    // checking last item
    if ($('div[data-question-navigator]:visible').next('div[data-question-navigator]').length < 1) {
        $('a.nextBtn').hide();
    }
    else {
        $('a.nextBtn').show();
    }

    $('html, body').animate({
        'scrollTop': 0
    });

}


$('button[data-question-code]').click(function (e) {

    var thisObj = $(this);
    //$('.yesnoBtn button').removeClass('selected');
    thisObj.addClass('selected').siblings().removeClass('selected');
    var val = thisObj.attr('id') == 'yes' ? true : false;
    //do something with val


    e.preventDefault();
    var answer = $(this).data();

    window[answer.section + "Answers"][answer.questionCode].answer = answer.answerValue;
    $('a[data-question-pointer="' + answer.questionCode + '"]').siblings('span').removeClass().addClass(answer.answerClass);

    invokeAllFunctions();


    // yes no option question

});
function invokeAllFunctions() {
    // checking and enabling disabling the question
    checkingNotApplicableQuestions();
    // showing progress for all section   
    showingSectionAnswerProgress(sectionNames.LevelAssessment);
    showingSectionAnswerProgress(sectionNames.Data);
    showingSectionAnswerProgress(sectionNames.DesignAndTesting);
    showingSectionAnswerProgress(sectionNames.ClinicalAssuranceAndEfficacy);
    showingSectionAnswerProgress(sectionNames.UserExperience);
    //showingSectionAnswerProgress(sectionNames.AppInfo);
    // checking which value to consider for calculations
    riskvalueToConsider();
    //invokeAllCalculationFunction();


    // checking the total enable questions
    orchaAssessmentValues.CalculatedValues.TotalQuestions = 0;
    orchaAssessmentValues.CalculatedValues.TotalSheetRisk = 0;
    orchaAssessmentValues.CalculatedValues.TotalSheetValue = 0;
    orchaAssessmentValues.CalculatedValues.TotalActualValue = 0;
    orchaAssessmentValues.CalculatedValues.TotalActualRisk = 0;


    CalculatingLevelAssessment();
    CalculatingSectionValues(sectionNames.Data);
    CalculatingSectionValues(sectionNames.DesignAndTesting);
    CalculatingSectionValues(sectionNames.ClinicalAssuranceAndEfficacy);
    CalculatingSectionValues(sectionNames.UserExperience);



    enabledQuestion(sectionNames.LevelAssessment);
    enabledQuestion(sectionNames.Data);
    enabledQuestion(sectionNames.DesignAndTesting);
    enabledQuestion(sectionNames.ClinicalAssuranceAndEfficacy);
    enabledQuestion(sectionNames.UserExperience);

    // showing the all informations on the pages for all section
    showLevelAssessmentInfo();
    PopulateSectionCommentsOnOrchaAssessement();
    populateRiskandValueScore(sectionNames.Data);
    populateRiskandValueScore(sectionNames.DesignAndTesting);
    populateRiskandValueScore(sectionNames.ClinicalAssuranceAndEfficacy);
    populateRiskandValueScore(sectionNames.UserExperience);

    calculatingUserContributionScore();
    showingTotalCalculatedValues();
    enableDisableSections();
    enableDisableButtons();
}
function enableDisableButtons() {
    if (validateAllSections()) {
        if (!$('#reviewPublishBtn').hasClass("active")) {
            $('#reviewPublishBtn').css({ "background": "", "cursor": "auto" });
        }


        if (!$('#reviewMarkCheckBtn').hasClass("active")) {
            $('#reviewMarkCheckBtn').css({ "background": "", "cursor": "auto" });
        }


        $('#PreviewCertificate').css({ "background": "#19BAB5", "cursor": "auto" });
        $('#PreviewReport').css({ "background": "#19BAB5", "cursor": "auto" });
    } else {
        if (!$('#reviewPublishBtn').hasClass("active")) {
            $('#reviewPublishBtn').css({ "background": "#97D4D1", "cursor": "default" });
        }
        if (!$('#reviewMarkCheckBtn').hasClass("active")) {
            $('#reviewMarkCheckBtn').css({ "background": "#97D4D1", "cursor": "default" });
        }


        $('#PreviewCertificate').css({ "background": "#97D4D1", "cursor": "default" });
        $('#PreviewReport').css({ "background": "#97D4D1", "cursor": "default" });
    }
}
function enableDisableSections() {
    if (orchaAssessmentValues.LevelAssessment.Level.Value == 0) {
        $('div.overlay').css({ "position": "absolute" });
    }
    else {
        $('div.overlay').css({ "position": "inherit" });
    }
}
function calculatingUserContributionScore() {
    var noOfReviewsTotalValue = 0;
    var noOfDownloadTotalValue = 0;
    var noOfAverageTotalValue = 0
    var totalDownloadsasNumber = 0;
    var totalReviewsasNumber = 0;

    if (orchaAssessmentValues.UserScoreContribution.NoOfReviews == 0) {
        //orchaAssessmentValues.CalculatedValues.TotalSheetValue += 10;
        orchaAssessmentValues.CalculatedValues.TotalActualValue += 10;
        orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation = 10;
        $('span[data-value-actual-score="UserContribution"]').text(orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation);
        return true;
    }

    if (orchaAssessmentValues.UserScoreContribution.NoOfDownloads == 0) {
        totalDownloadsasNumber = orchaAssessmentValues.UserScoreContribution.NoOfReviews / 0.03;
    }
    else {
        totalDownloadsasNumber = orchaAssessmentValues.UserScoreContribution.NoOfDownloads;
    }

    if (totalDownloadsasNumber == 0) {
        orchaAssessmentValues.CalculatedValues.TotalActualValue += 10;
        orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation = 10;
        $('span[data-value-actual-score="UserContribution"]').text(orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation);
        return true;
    }

    if (totalDownloadsasNumber > 50000) {
        orchaAssessmentValues.UserScoreContribution.NoOfDownloadTotalValue = Math.log(50000) / Math.log(1.7);
    }
    else {
        if (totalDownloadsasNumber != 0)
            noOfDownloadTotalValue = Math.log(totalDownloadsasNumber) / Math.log(1.7);
        else
            noOfDownloadTotalValue = 0
        orchaAssessmentValues.UserScoreContribution.NoOfDownloadTotalValue = noOfDownloadTotalValue;
    }
    totalReviewsasNumber = (orchaAssessmentValues.UserScoreContribution.NoOfReviews / totalDownloadsasNumber) * 100;
    if (totalReviewsasNumber < 10) {
        totalReviewsasNumber = totalReviewsasNumber * 10;
    } else {
        totalReviewsasNumber = 100;
    }
    if (totalReviewsasNumber != 0)
        totalReviewasNumber = Math.log(totalReviewsasNumber) / Math.log(1.6);
    else
        totalReviewasNumber = 0;
    orchaAssessmentValues.UserScoreContribution.NoOfReviewsTotalValue = totalReviewasNumber / 10;
    orchaAssessmentValues.UserScoreContribution.NoOfAverageReviewsTotalValue = (orchaAssessmentValues.UserScoreContribution.AverageRating / 5) - 0.5;


    if (orchaAssessmentValues.UserScoreContribution.NoOfReviews == 0 || orchaAssessmentValues.UserScoreContribution.NoOfDownloadTotalValue == 0) {
        orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation = 10;
    }
    else {
        orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation = (orchaAssessmentValues.UserScoreContribution.NoOfReviewsTotalValue * orchaAssessmentValues.UserScoreContribution.NoOfAverageReviewsTotalValue * orchaAssessmentValues.UserScoreContribution.NoOfDownloadTotalValue) + 10;

    }


    if (orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation != 0) {
        orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation = Math.round(orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation);
    }

    orchaAssessmentValues.CalculatedValues.TotalActualValue += orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation;

    $('span[data-value-actual-score="UserContribution"]').text(orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation);

}
function showingTotalCalculatedValues() {
    //data-total-score
    $('span[data-total-question]').text(orchaAssessmentValues.CalculatedValues.TotalQuestions);
    $('span[data-total-sheet-value-score]').text(orchaAssessmentValues.CalculatedValues.TotalSheetValue);
    $('span[data-total-actual-value-score]').text(Math.round(orchaAssessmentValues.CalculatedValues.TotalActualValue));
    $('span[data-total-sheet-risk-score]').text(orchaAssessmentValues.CalculatedValues.TotalSheetRisk);
    $('span[data-total-actual-risk-score]').text(Math.round(orchaAssessmentValues.CalculatedValues.TotalActualRisk));
}

$("#ReviewSummary").change(function () {
    orchaAssessmentValues.MiscellaneousValues.ReviewSummary = $(this).val();
    enableDisableSections();
    enableDisableButtons();
});

function PopulateSectionCommentsOnOrchaAssessement() {
    $("p[data-section-comments='" + sectionNames.Data + "']").text(orchaAssessmentValues.Data.SectionSummary.trim()) == "" ? 'No Comments' : orchaAssessmentValues.Data.SectionSummary.trim();
    $("p[data-section-comments='" + sectionNames.DesignAndTesting + "']").text(orchaAssessmentValues.DesignAndTesting.SectionSummary.trim()) == "" ? 'No Comments' : orchaAssessmentValues.DesignAndTesting.SectionSummary.trim();
    $("p[data-section-comments='" + sectionNames.ClinicalAssuranceAndEfficacy + "']").text(orchaAssessmentValues.ClinicalAssuranceAndEfficacy.SectionSummary.trim()) == "" ? 'No Comments' : orchaAssessmentValues.ClinicalAssuranceAndEfficacy.SectionSummary.trim();
    $("p[data-section-comments='" + sectionNames.UserExperience + "']").text(orchaAssessmentValues.UserExperience.SectionSummary.trim()) == "" ? 'No Comments' : orchaAssessmentValues.UserExperience.SectionSummary.trim();
    $("p[data-section-comments='" + sectionNames.AppInfo + "']").text(orchaAssessmentValues.MiscellaneousValues.OpeningNotes.trim()) == "" ? 'No Comments' : orchaAssessmentValues.MiscellaneousValues.OpeningNotes.trim();
}

$(".bottomtextArea :input").change(function () {
    var data = $(this).data();
    if (data.questionCode !== null && data.questionCode !== undefined) // saving comments for question
    {


        window[data.section + "Answers"][data.questionCode].comments = $(this).val();


    }
    else { // saving comments for section
        if (data.sectionComments !== null && data.sectionComments !== undefined) // saving comments for question
        {
            if (data.sectionComments == sectionNames.AppInfo) {
                orchaAssessmentValues.MiscellaneousValues.OpeningNotes = $(this).val();
                $("p[data-section-comments='" + data.sectionComments + "']").text($(this).val().trim() == "" ? 'No Comments' : $(this).val());

            } else {
                orchaAssessmentValues[data.sectionComments].SectionSummary = $(this).val();
                $("p[data-section-comments='" + data.sectionComments + "']").text($(this).val().trim() == "" ? 'No Comments' : $(this).val());
            }

        }



        // save section comments
    }

});

$('a[data-question-pointer]').click(function (e) {
    e.preventDefault();
    var code = $(this).data('question-pointer');
    if ($(this).siblings('span').attr('class') == "lgNotappl") {
        var parentCode = $(this).data('parent-question');

        swal("", "Question is disabled and is dependent on question " + parentCode, "warning");

        return false;
    }
    $('.rightCol:visible').parent().hide();

    $('div[data-question-code="' + code + '"]').parent().show();

    //checkingNotApplicableQuestion() don't naviagte if not applicable

    validatingNextPreviousBtns();
    $('html, body').animate({
        'scrollTop': 0
    });
});
// click on left section navigation
$('div.sidebarPost').click(function (e) {
    e.preventDefault();
    var section = $(this).data('section');
    invokeAllFunctions();

    if (!validateLevelSection(section)) {

        $('.rightCol:visible').parent().hide();
        $('div[data-section-navigator="' + sectionNames.LevelAssessment + '"]').show();
        return false;
    }

    $('.rightCol:visible').parent().hide();
    $('div[data-section-navigator="' + section + '"]').show();

    validatingNextPreviousBtns();

});


function validateLevelSection(sectionName) {
    if (sectionName != null && sectionName != undefined && (sectionName == sectionNames.LevelAssessment || sectionName == sectionNames.AppInfo)) // don't validate because user has clicked on level section side bar.
    {
        return true;
    }

    if (sectionName == null || sectionName == undefined) {
        sectionName = sectionNames.LevelAssessment;
    }

    if (nextSectionName(sectionName)) // user might clicked on other section side bar or user section will be going to change
    {
        var isAllQuestionAnswered = true;
        for (var questionCode in LevelAssessmentAnswers) {

            if (LevelAssessmentAnswers[questionCode].enabled && LevelAssessmentAnswers[questionCode].answer == 0) {
                isAllQuestionAnswered = false;
                break;
            }
        }

        if (!isAllQuestionAnswered) {
            swal("", "You cannot proceed without answering all the level section question.", "warning");
            return false;
        }


        if (orchaAssessmentValues.LevelAssessment.Level.Value == 0) {
            swal("", "You cannot proceed without determining the level of the app. Please double-check that you have answered all questions correctly. Escalate this app to someone else if it persists", "warning");
            return false;
        }

        return true;
    }
    return true;
}

function nextSectionName(sectionName) {
    var nextSectionName = $('div[data-question-navigator]:visible').next().data('question-navigator');
    var currentSectionName = $('div[data-question-navigator]:visible').data('question-navigator');
    if (nextSectionName != sectionName || currentSectionName != sectionName) {
        return true;
    }
}


$('#orchaAssessmentBtn').on('click', showOrchaAssessment);

function showOrchaAssessment() {

    $('#orchaAssessmentBtn').css({ "opacity": 1, "cursor": "auto" });
    $('.rightCol:visible').parent().hide();
    $('div[data-section-navigator="orchaassessment"]').show();

}

function showingSectionAnswerProgress(sectionName) {

    var totalQuestion = 0; //default 1 for sections summary comments
    var noOfQuestionAnswer = 0;
    var sectionData = window[sectionName + "Answers"];
    for (var questionCode in sectionData) {

        var parentDataAttribute = $('a[data-question-pointer="' + questionCode + '"]').attr('data-parent-question');
        if (typeof parentDataAttribute === typeof undefined || parentDataAttribute === false) {
            totalQuestion++;
            if (sectionData[questionCode].answer == 1 || sectionData[questionCode].answer == 2) {
                noOfQuestionAnswer++;
            }
        }
    }

    var percentage = Math.ceil((noOfQuestionAnswer / totalQuestion) * 100);
    $('span[data-section-progressbar="' + sectionName + '"]').width(percentage + '%')

}


function isSectionCommentExist(sectionName) {
    var sectionComments = $(".bottomtextArea :input[data-section-comments='" + sectionName + "']").val();
    if (sectionComments != undefined && sectionComments != null && sectionComments.trim() != "") {
        return true;
    }
    return false;
}


function CalculatingLevelAssessment() {
    orchaAssessmentValues.LevelAssessment.Level = levelNames.NoLevel;
    var lev1 = (LevelAssessmentAnswers.LF01.answer == 1 && LevelAssessmentAnswers.LF02.answer == 2 && LevelAssessmentAnswers.LF03.answer == 2 && LevelAssessmentAnswers.LF05.answer == 2 &&
   LevelAssessmentAnswers.LF21.answer == 2 && LevelAssessmentAnswers.LF22.answer == 2 && LevelAssessmentAnswers.LF24.answer == 2) ? true : false;
    if (lev1 == true) {
        orchaAssessmentValues.LevelAssessment.Level = levelNames.Level1;
    }
    var lev2 = (LevelAssessmentAnswers.LF01.answer == 1 && (LevelAssessmentAnswers.LF02.answer == 1 || LevelAssessmentAnswers.LF03.answer == 1) && LevelAssessmentAnswers.LF05.answer == 2 &&
   LevelAssessmentAnswers.LF21.answer == 2 && LevelAssessmentAnswers.LF22.answer == 2 && LevelAssessmentAnswers.LF24.answer == 2) ? true : false;
    if (lev2 == true) {
        orchaAssessmentValues.LevelAssessment.Level = levelNames.Level2;
    }
    var lev3 = (LevelAssessmentAnswers.LF01.answer == 1 && (LevelAssessmentAnswers.LF02.answer == 1 || LevelAssessmentAnswers.LF03.answer == 1) && LevelAssessmentAnswers.LF05.answer == 2
        && (LevelAssessmentAnswers.LF21.answer == 1 || LevelAssessmentAnswers.LF22.answer == 1 || LevelAssessmentAnswers.LF23.answer == 1) && LevelAssessmentAnswers.LF24.answer == 2) ? true : false;
    if (lev3 == true) {
        orchaAssessmentValues.LevelAssessment.Level = levelNames.Level3;
    }
    var lev4 = (LevelAssessmentAnswers.LF05.answer == 1 && (LevelAssessmentAnswers.LF21.answer == 1 || LevelAssessmentAnswers.LF22.answer == 1 || LevelAssessmentAnswers.LF23.answer == 1) && LevelAssessmentAnswers.LF24.answer == 1) ? true : false;
    if (lev4 == true) {
        orchaAssessmentValues.LevelAssessment.Level = levelNames.Level4;
    }
    var ceMark = (LevelAssessmentAnswers.LF14.answer == 1 || LevelAssessmentAnswers.LF22.answer == 1 || LevelAssessmentAnswers.LF23.answer == 1 || LevelAssessmentAnswers.LF24.answer == 1) ? true : false;

    orchaAssessmentValues.LevelAssessment.MarkCE = ceMark;

    var level34logic = (LevelAssessmentAnswers.LF21.answer == 1 || LevelAssessmentAnswers.LF22.answer == 1 || LevelAssessmentAnswers.LF23.answer == 1) ? true : false;
    orchaAssessmentValues.LevelAssessment.IsLevel34Logic = level34logic;
    for (var key in functionCapabilitiesNames) {

        orchaAssessmentValues.LevelAssessment.FunctionCapabilities[key] = false; // setting all to no by default

    }

    var selectedFunctionCap = $('div.yesnoBtn[data-function-capabilities!=""]');//.find("#yes.selected").parent();
    selectedFunctionCap.each(function (index, element) {
        var data = $(element).data();
        if (LevelAssessmentAnswers[data.questionCode].answer == 1) {
            for (var key in functionCapabilitiesNames) {

                if (functionCapabilitiesNames[key].Name == data.functionCapabilities) {
                    orchaAssessmentValues.LevelAssessment.FunctionCapabilities[key] = true;
                    break;
                }
            }
        }
    });

}

function showLevelAssessmentInfo() {
    if (orchaAssessmentValues.LevelAssessment.Level.Name != "?") {
        //2 - Self Managed
        $('span[data-app-level="LevelAssessment"]').text(orchaAssessmentValues.LevelAssessment.Level.Value + " - " + orchaAssessmentValues.LevelAssessment.Level.Name);
    }
    else {
        $('span[data-app-level="LevelAssessment"]').text("?");
    }
    $('span[data-app-level-name]').text(orchaAssessmentValues.LevelAssessment.Level.Name);

    $('i[data-is-level]').removeClass('lgYes').addClass("lgNo").text('No');
    if (orchaAssessmentValues.LevelAssessment.Level.Name != "?")
        $('i[data-is-level=' + orchaAssessmentValues.LevelAssessment.Level.Value + ']').removeClass('lgNo').addClass("lgYes").text('Yes');
    if (orchaAssessmentValues.LevelAssessment.MarkCE == true) {
        $('i[data-require-ce-mark]').removeClass('lgNo').addClass("lgYes").text('Yes');
        $('span[data-require-ce-mark]').text('Yes');
    } else {
        $('i[data-require-ce-mark]').removeClass('lgYes').addClass("lgNo").text('No');
        $('span[data-require-ce-mark]').text('No');
    }
    if (orchaAssessmentValues.LevelAssessment.IsLevel34Logic == true) {
        $('i[data-level34-logic-test]').removeClass('lgNo').addClass("lgYes").text('Yes');
    } else {
        $('i[data-level34-logic-test]').removeClass('lgYes').addClass("lgNo").text('No');
    }
    $('i[data-is-functional]').removeClass('lgYes').addClass("lgNo").text('No');
    for (var key in orchaAssessmentValues.LevelAssessment.FunctionCapabilities) {
        if (orchaAssessmentValues.LevelAssessment.FunctionCapabilities[key] == true) {
            $('i[data-is-functional=' + key + ']').removeClass('lgNo').addClass("lgYes").text('Yes');
        }
    }
    $('span[data-question-out-of="' + sectionNames.LevelAssessment + '"]').text(orchaAssessmentValues.LevelAssessment.TotalQuestions);

}
// done
function CalculatingSectionValues(sectionName) {
    orchaAssessmentValues[sectionName].RiskScore = 0;


    orchaAssessmentValues[sectionName].ValueScore = 0;
    orchaAssessmentValues[sectionName].ValueOutOfPossible = 0;

    for (var questionCode in window[sectionName + "Answers"]) {
        GoldenRule(questionCode);
    }
    //orchaAssessmentValues[sectionName].RiskScoreOutOfAllocation = ((orchaAssessmentValues[sectionName].RiskScore / orchaAssessmentValues[sectionName].RiskOutOfPossible) * orchaAssessmentValues[sectionName].RiskAllocationOfTotalScore).toFixed(2);

    if (orchaAssessmentValues[sectionName].RiskOutOfPossible == 0) {
        orchaAssessmentValues[sectionName].RiskScoreOutOfAllocation = 0;
    } else {
        orchaAssessmentValues[sectionName].RiskScoreOutOfAllocation = ((orchaAssessmentValues[sectionName].RiskScore / orchaAssessmentValues[sectionName].RiskOutOfPossible) * orchaAssessmentValues[sectionName].RiskAllocationOfTotalScore).toFixed(2);
    }

    if (orchaAssessmentValues[sectionName].ValueOutOfPossible == 0) {
        orchaAssessmentValues[sectionName].ValueScoreOutOfAllocation = 0;
    } else {
        orchaAssessmentValues[sectionName].ValueScoreOutOfAllocation = ((orchaAssessmentValues[sectionName].ValueScore / orchaAssessmentValues[sectionName].ValueOutOfPossible) * orchaAssessmentValues[sectionName].ValueAllocationOfTotalScore).toFixed(2);
    }

    orchaAssessmentValues.CalculatedValues.TotalActualValue += parseFloat(orchaAssessmentValues[sectionName].ValueScoreOutOfAllocation);
    orchaAssessmentValues.CalculatedValues.TotalActualRisk += parseFloat(orchaAssessmentValues[sectionName].RiskScoreOutOfAllocation);

    orchaAssessmentValues.CalculatedValues.TotalSheetValue += Math.round(orchaAssessmentValues[sectionName].ValueScore * 100 / 100);
    orchaAssessmentValues.CalculatedValues.TotalSheetRisk += Math.round(orchaAssessmentValues[sectionName].RiskScore * 100 / 100);
}

function GoldenRule(questionCode) {
    var answerData = $('div.yesnoBtn[data-question-code="' + questionCode + '"]').find("button").data();
    if (window[answerData.section + "Answers"][questionCode].enabled) {
        var questionData = $('div.yesnoBtn[data-question-code="' + questionCode + '"]').data();
        var answer = $('div.yesnoBtn[data-question-code="' + questionCode + '"]').find(".selected").data();
        if (questionData.riskModifier == "Yes" || questionData.riskModifier == "No") {
            if (answer != null && answer != undefined) {
                if ((answer.answerValue == 1 && questionData.riskModifier == "Yes") || (answer.answerValue == 2 && questionData.riskModifier == "No")) {
                    var riskAmount = window[answerData.section + "Answers"][questionCode].riskAmount;
                    orchaAssessmentValues[answerData.section].RiskScore += riskAmount;
                    //if riskAmount > 0 ? then add question to report
                    if (riskAmount > 0) {
                        if (showInReport.indexOf(questionCode) < 0)
                            showInReport.push(questionCode);
                    }
                    console.log("Golden rule pass for Question Code: " + questionCode + " Risk : " + riskAmount);
                }
                else {
                    console.log("Golden rule fail for Question Code: " + questionCode + " Risk : 0" );
                }
            }
            // if (answerData.section != sectionNames.Data)
            // orchaAssessmentValues[answerData.section].RiskOutOfPossible += window[answerData.section + "Answers"][questionCode].riskAmount;
            //console.log("Question Code: " + questionCode + " Risk : " + orchaAssessmentValues[answerData.section].RiskOutOfPossible);
        }
        if (questionData.valueModifier == "Yes" || questionData.valueModifier == "No") {
            if (answer != null && answer != undefined) {
                var valueAmount = window[answerData.section + "Answers"][questionCode].valueAmount;
                if ((answer.answerValue == 1 && questionData.valueModifier == "Yes") || (answer.answerValue == 2 && questionData.valueModifier == "No")) {
                    orchaAssessmentValues[answerData.section].ValueScore += valueAmount;
                    console.log("Golden rule pass for Question Code: " + questionCode + " Value : " + valueAmount);
                } else {
                    console.log("Golden rule fail for Question Code: " + questionCode + " Value : 0");
                    //check valueAmount > 0 ? add the question to report
                    if (valueAmount > 0) {
                        if (showInReport.indexOf(questionCode) < 0)
                            showInReport.push(questionCode);
                    }
                }

            }
            orchaAssessmentValues[answerData.section].ValueOutOfPossible += window[answerData.section + "Answers"][questionCode].valueAmount;
            //console.log("Question Code: " + questionCode + " Value : " + orchaAssessmentValues[answerData.section].ValueOutOfPossible);
        }

    }
}

function populateRiskandValueScore(sectionName) {
    $('span[data-value-score="' + sectionName + '"]').text(orchaAssessmentValues[sectionName].ValueScore);
    $('span[data-value-score-out-of="' + sectionName + '"]').text(orchaAssessmentValues[sectionName].ValueOutOfPossible);
    $('span[data-risk-score="' + sectionName + '"]').text(orchaAssessmentValues[sectionName].RiskScore);
    $('span[data-risk-score-out-of="' + sectionName + '"]').text(orchaAssessmentValues[sectionName].RiskOutOfPossible);
    //data-question-out-of
    $('span[data-question-out-of="' + sectionName + '"]').text(orchaAssessmentValues[sectionName].TotalQuestions);
    //data-risk-actual-score
    $('span[data-risk-actual-score="' + sectionName + '"]').text(orchaAssessmentValues[sectionName].RiskScoreOutOfAllocation);

    $('span[data-value-actual-score="' + sectionName + '"]').text(orchaAssessmentValues[sectionName].ValueScoreOutOfAllocation);
}



$(window).load(function () {
    // executes when complete page is fully loaded, including all frames, objects and images
    PrePopulatingResumeReviewData();
});
function PrePopulatingResumeReviewData() {

    $(".chosen-select").change();
    orchaAssessmentValues.MiscellaneousValues.OpeningNotes = $("#OpeningNotes").text().trim();
    orchaAssessmentValues.MiscellaneousValues.ReviewSummary = $("#ReviewSummary").text().trim();
    if ($("#orcha_app_platform").text().trim().toLowerCase() == "ios")
        orchaAssessmentValues.MiscellaneousValues.Platfrom = 1;
    else
        orchaAssessmentValues.MiscellaneousValues.Platfrom = 2;
    if ($("#orcha_app_downloads").text().trim().toLowerCase() == "")
        orchaAssessmentValues.UserScoreContribution.NoOfDownloads = 0;
    else {
        var download = 0;
        var array = $("#orcha_app_downloads").text().trim().toLowerCase().split('-');
        if (array.length > 0) {
            download = parseInt(array[0].replace(/,/g, ''), 10);
            orchaAssessmentValues.UserScoreContribution.NoOfDownloads = download;
        }
        else {
            orchaAssessmentValues.UserScoreContribution.NoOfDownloads = 0;
        }
    }

    if ($("#orcha_app_reviews").text().trim().toLowerCase() == "")
        orchaAssessmentValues.UserScoreContribution.NoOfReviews = 0;
    else {
        orchaAssessmentValues.UserScoreContribution.NoOfReviews = parseInt($("#orcha_app_reviews").text().trim().toLowerCase(), 10);
    }

    if ($("#orcha_app_rating").text().trim().toLowerCase() == "")
        orchaAssessmentValues.UserScoreContribution.AverageRating = 0;
    else {
        orchaAssessmentValues.UserScoreContribution.AverageRating = parseFloat($("#orcha_app_rating").text().trim().toLowerCase(), 10);
    }

    // populating the comments for each question
    $("textarea[data-section]").each(function (index, element) {

        var data = element.dataset;
        window[data.section + "Answers"][data.questionCode].comments = $(element).val();

    });

    $("textarea[data-section-comments]").each(function (index, element) {
        var data = element.dataset;
        var comment = $(element).val();
        if (comment != null && comment.trim() != "")
            if (data.sectionComments != sectionNames.AppInfo)
                orchaAssessmentValues[data.sectionComments].SectionSummary = comment;

    });

    var selectedAnswers = $('button[data-section][class*="selected"]');
    var totalSelectedAnswers = selectedAnswers.length;
    selectedAnswers.each(function (index, element) {
        var data = element.dataset;
        window[data.section + "Answers"][data.questionCode].answer = parseInt(data.answerValue);
        if (index + 1 == totalSelectedAnswers) {
            invokeAllFunctions();
        }
    });


    if ($('#reviewPublishBtn').text().toLowerCase() == "unpublish") {

        $("div[class='questionPage rightCol']").children(".lqWrapp").css({ "pointer-events": "none", "opacity": 0.5 });
        var reviewDate = new Date();
        reviewDate = new Date($('#defaultCountDown').data("review-datetime"));

        $('#defaultCountDown').countdown({
            serverSync: function () {
                var currentTime = new Date($('#defaultCountDown').data("currenttime"));
                return currentTime;
            }, until: reviewDate
        });
    }

    if ($('#reviewForcePublishBtn').text().toLowerCase() == "unpublish") {
        $("div[class='questionPage rightCol']").children(".lqWrapp").css({ "pointer-events": "none", "opacity": 0.5 });

        $("div[class='questionPage rightCol']").children(".levelDesc").css({ "pointer-events": "none", "opacity": 0.5 });
    }

    $("div.chosen-container.chosen-container-multi").width("100%");

}

var timer = document.querySelector('.timer');
if (timer) {
    timer.onclick = function () {


        if ($('#reviewMarkCheckBtn').text().toLowerCase() == "unmark to be checked" || $('#reviewPublishBtn').text().toLowerCase() == "unpublish") {
            if (!validateAllSections()) {
                swal("", "Review can't be save!. Please enter all required information.", "warning");
                return false;
            }
        }


        var urlToPost = location.pathname.substr(0, location.pathname.toLowerCase().indexOf('/review/') + 8)
        urlToPost += "SaveReview";
        SaveReview(urlToPost, $('#reviewSaveBtn'));

    };
}

var check = document.querySelector('.check');
if (check) {
    check.onclick = function () {

        if ($('#reviewMarkCheckBtn').css('cursor') == "default") {
            return false;
        }

        if ($('#reviewMarkCheckBtn').text().toLowerCase() == "mark to be checked") {
            if (!validateAllSections()) {
                swal("", "Review can't be marked for checking!. Please enter all required information.", "warning");
                return false;
            }
        }

        var urlToPost = location.pathname.substr(0, location.pathname.toLowerCase().indexOf('/review/') + 8)

        if ($('#reviewMarkCheckBtn').text().toLowerCase() == "unmark to be checked") {
            urlToPost += "UnMarkReview";
            ChangeStatusOfReview(urlToPost, $('#reviewMarkCheckBtn'));
        }
        else {
            urlToPost += "MarkCheckReview";
            SaveReview(urlToPost, $('#reviewMarkCheckBtn'));
        }
    };
}

var publishReview = document.querySelector('.publishReview');
if (publishReview) {
    publishReview.onclick = function () {

        if ($('#reviewPublishBtn').css('cursor') == "default") {
            return false;
        }

        if (!validateAllSections()) {
            swal("", "Review can't be publish!. The review is incomplete. Please check that all questions have been attempted.", "warning");
            return false;
        }


        var displaytext = "Publishing the review will send out an e-mail to " + $('#orcha_publisherEmail').text() + " containing a link to certificate, and a link to register for an account if this is their first app on ORCHA. Continue?"

        if ($('#reviewPublishBtn').text() == "Unpublish") {
            displaytext = "This will stop the countdown and make the review editable. Are you sure?"
        }

        swal({
            title: "",
            text: displaytext,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Confirm',
            closeOnConfirm: true
        },
        function () {
            var urlToPost = location.pathname.substr(0, location.pathname.toLowerCase().indexOf('/review/') + 8)
            if ($('#reviewPublishBtn').text() == "Unpublish") {
                urlToPost += "UnPublishReview";
                ChangeStatusOfReview(urlToPost, $('#reviewPublishBtn'));
            }
            else {
                urlToPost += "PublishReview";
                SaveReview(urlToPost, $('#reviewPublishBtn'));
            }

        });
    };
}


var forcePublishReview = document.querySelector('#reviewForcePublishBtn');
if (forcePublishReview) {
    forcePublishReview.onclick = function () {



        if (!validateAllSections()) {
            swal("", "Review can't be publish!. Please enter all required information.", "warning");
            return false;
        }


        var displaytext = "This will forcefully publish a review and make it public. ARE YOU SURE?"

        if ($('#reviewForcePublishBtn').text() == "Unpublish") {
            displaytext = "Unpublishing the review will make the app not visible on ORCHA until a review is published. Continue?"

        }

        swal({
            title: "",
            text: displaytext,
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Confirm',
            closeOnConfirm: true
        },
        function () {
            var urlToPost = location.pathname.substr(0, location.pathname.toLowerCase().indexOf('/review/') + 8)
            if ($('#reviewForcePublishBtn').text() == "Unpublish") {
                urlToPost += "UnPublishReview";
                ChangeStatusOfReview(urlToPost, $('#reviewForcePublishBtn'));
            }
            else {
                urlToPost += "ForcePublishReview";
                ChangeStatusOfReview(urlToPost, $('#reviewForcePublishBtn'));
            }

        });
    };
}

var deleteReview = document.querySelector('.deleteReview');
if (deleteReview) {

    deleteReview.onclick = function () {

        swal({
            title: "",
            text: "Are you sure you want to discard this review?",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: '#DD6B55',
            confirmButtonText: 'Confirm',
            closeOnConfirm: false
        },
        function () {

            var urlToPost = location.pathname.substr(0, location.pathname.toLowerCase().indexOf('/review/') + 8)
            urlToPost += "DeleteReview";
            DeleteReview(urlToPost);

        });
    };
}

function hotKeyForNextQuestion(e) {
    if (e.ctrlKey && e.keyCode == 32) { // 32 is the code of spacebar
        if ($('div[data-question-navigator]:visible').data('question-navigator') !== "orchaassessment") {
            nextButtonClicked(e);
        }

    }
}
// register the handler
document.addEventListener('keyup', hotKeyForNextQuestion, false);

function ChangeStatusOfReview(urlToPost, button) {
    button.css({ "pointer-events": "none" });
    $.blockUI({
        overlayCSS:
            { backgroundColor: '#e9fcfb' },
        message: "<p class='loginMsg'>Please wait...</p>",
        css: { border: '2px solid #4a9acf' }
    });
    $.ajax({

        url: urlToPost,
        method: 'POST',
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $.unblockUI();
            button.css({ "pointer-events": "" });
            if (data != undefined && data != null && data.success == true) {
                afterSuccessfulAjaxPost(data, button);
            } else {
                swal("", data.message, "error");
                setTimeout(swal.close, 4000);
            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.unblockUI();
            button.css({ "pointer-events": "" });
            if (XMLHttpRequest.readyState == 4) {
                // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
            }
            else if (XMLHttpRequest.readyState == 0) {
                swal("", "Connection error, please try again.", "error");
            }
            else {
                // something weird is happening
            }
        }


    });
}

function afterSuccessfulAjaxPost(data, button) {
    swal("", data.message, "success");
    setTimeout(swal.close, 4000);
    if (button.attr("id") == "reviewMarkCheckBtn") {


        if (button.hasClass('active')) {
            button.text('Unmark to be checked');
            button.addClass("active");
        } else {
            button.text('Mark to be checked');
            button.removeClass("active");

            enableDisableButtons();
        }



    }
    if (button.attr("id") == "reviewPublishBtn") {

        if (button.text() == ('Publish')) {
            $("#reviewDeleteBtn").hide();
            $("#reviewForcePublishBtn").show().text("Force Publish");
            $("#reviewForcePublishBtn").css({ "cursor": "auto" });
            $("#reviewMarkCheckBtn").hide();
            $("div[class='questionPage rightCol']").children(".lqWrapp").css({ "pointer-events": "none", "opacity": 0.5 });

            button.text('Unpublish');
            button.addClass("active");
            //button.css({ "background": "#F53030", "cursor": "auto", "opacity": 1 });
            $('#defaultCountDown').countdown('destroy');
            var reviewDate = new Date();
            reviewDate = new Date(data.data.publishDate);
            $('#defaultCountDown').countdown({
                serverSync: function () {
                    var currentTime = new Date(data.data.currentTime);
                    return currentTime;
                }, until: reviewDate
            });

        } else {

            $("div[class='questionPage rightCol']").children(".lqWrapp").css({ "pointer-events": "", "opacity": "" });

            $("#reviewDeleteBtn").show();
            $("#reviewMarkCheckBtn").show().text("Mark to be checked");
            $("#reviewForcePublishBtn").hide();
            button.text('Publish');
            button.removeClass("active");

            $('#defaultCountDown').countdown('destroy');

            enableDisableButtons();
        }

    }
    if (button.attr("id") == "reviewForcePublishBtn") {


        if (button.text() == ('Force Publish')) {
            $("div[class='questionPage rightCol']").children(".lqWrapp").css({ "pointer-events": "none", "opacity": 0.5 });

            $("div[class='questionPage rightCol']").children(".levelDesc").css({ "pointer-events": "none", "opacity": 0.5 })

            $('#defaultCountDown').countdown('destroy');
            $("#reviewSaveBtn").hide();
            $("#reviewDeleteBtn").hide();
            $("#reviewPublishBtn").hide();
            button.text('Unpublish');
            button.addClass("active");
            //button.css({ "background": "#F53030", "cursor": "auto", "opacity": 1 });
            var reviewDate = new Date();
            reviewDate = new Date(data.data.publishDate);
            $('#defaultCountDown').countdown({
                serverSync: function () {
                    var currentTime = new Date(data.data.currentTime);
                    return currentTime;
                }, until: reviewDate
            });

        } else {


            $("div[class='questionPage rightCol']").children(".lqWrapp").css({ "pointer-events": "", "opacity": "" });

            $("div[class='questionPage rightCol']").children(".levelDesc").css({ "pointer-events": "", "opacity": "" })
            $("#reviewForcePublishBtn").hide();
            $("#reviewMarkCheckBtn").show().text("Mark to be checked");

            $("#reviewDeleteBtn").show();
            $("#reviewSaveBtn").show();
            $("#reviewPublishBtn").show().text("Publish");
            button.text('Publish');
            button.removeClass("active");
            $("#reviewMarkCheckBtn").removeClass("active");
            $("#reviewPublishBtn").removeClass("active");
            $('#defaultCountDown').countdown('destroy');

            enableDisableButtons();
        }

    }
}

function DeleteReview(urlToPost) {



    $.blockUI({
        overlayCSS:
            { backgroundColor: '#e9fcfb' },
        message: "<p class='loginMsg'>Please wait...</p>",
        css: { border: '2px solid #4a9acf' }
    });
    $.ajax({

        url: urlToPost,
        method: 'GET',

        //data: JSON.stringify(SaveReviewModel),
        success: function (data) {
            $.unblockUI();
            if (data != undefined && data != null && data.success == true) {
                swal("", data.message, "success");
                window.location = data.data.url;
            } else {

                swal("", data.message, "error");

            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.unblockUI();
            button.css({ "pointer-events": "" });
            if (XMLHttpRequest.readyState == 4) {
                // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
            }
            else if (XMLHttpRequest.readyState == 0) {
                swal("", "Connection error, please try again.", "error");
            }
            else {
                // something weird is happening
            }
        }
    });
}


function SaveReview(urlToPost, button) {


    var answers = [];
    var sectionComments = [];
    for (var sectionName in sectionNames) {
        if (sectionName != sectionNames.AppInfo) {

            if (sectionName != sectionNames.LevelAssessment && orchaAssessmentValues.LevelAssessment.Level.Value == 0) {
                continue;
            }

            for (var questionCode in window[sectionName + "Answers"]) {
                var currentQuestion = window[sectionName + "Answers"][questionCode];
                if (currentQuestion.enabled && currentQuestion.answer != 0) {
                    answers.push({
                        QuestionCode: questionCode,
                        Answer: currentQuestion.answer,
                        Comment: currentQuestion.comments
                    });
                }

            }
            if (sectionName != sectionNames.LevelAssessment) {
                sectionComments.push({
                    SectionType: sectionName,
                    ReviewerComments: orchaAssessmentValues[sectionName].SectionSummary
                });
            }
        }
    }


    SaveReviewModel = {
        Answers: answers,
        OpeningNotes: orchaAssessmentValues.MiscellaneousValues.OpeningNotes,
        ReviewSummary: orchaAssessmentValues.MiscellaneousValues.ReviewSummary,
        Categories: orchaAssessmentValues.MiscellaneousValues.Categories,
        SectionComments: sectionComments
    };
    button.css({ "pointer-events": "none" });
    $.blockUI({
        overlayCSS:
            { backgroundColor: '#e9fcfb' },
        message: "<p class='loginMsg'>Please wait...</p>",
        css: { border: '2px solid #4a9acf' }
    });
    $.ajax({

        url: urlToPost,
        method: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(SaveReviewModel),
        success: function (data) {
            $.unblockUI();
            button.css({ "pointer-events": "" });
            if (data != undefined && data != null && data.success == true) {
                afterSuccessfulAjaxPost(data, button);
            } else {

                swal("", data.message, "error");

            }

        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            $.unblockUI();
            button.css({ "pointer-events": "" });
            if (XMLHttpRequest.readyState == 4) {
                // HTTP error (can be checked by XMLHttpRequest.status and XMLHttpRequest.statusText)
            }
            else if (XMLHttpRequest.readyState == 0) {
                swal("", "Connection error, please try again.", "error");
            }
            else {
                // something weird is happening
            }
        }


    });





}
/* ======================Generate Certificate==========================*/

$('#PreviewCertificate').click(function (e) {

    // console.log("Certificate Data updated");
    if (validateAllSections()) {
        updateCertificateData();
    } else {
        e.preventDefault();
        return false;
    }
});

$('#PreviewReport').click(function (e) {

    // console.log("report Data updated");
    if (validateAllSections()) {
        updateReportData();
    }
    else {
        e.preventDefault();
        return false;
    }
});

function updateCertificateData() {
    var orchaValue = orchaAssessmentValues.CalculatedValues.TotalActualValue
    var orchaRisk = orchaAssessmentValues.CalculatedValues.TotalActualRisk;
    var orchaLevel = orchaAssessmentValues.LevelAssessment.Level.Value;
    var downLoads = $('#orcha_app_downloads').text();
    if (downLoads == "") {
        downLoads = "Unstated number of";
    }
    var reviews = $('#orcha_app_reviews').text();
    var rating = $('#orcha_app_rating').text();
    var reviewDate = $('#ReviewDate').text();
    var appName = $('#orcha_appname').text();
    var appPlatForm = $('#orcha_app_platform').text();
    var source = $('#orcha_source').text();
    var appPublisherName = $('#orcha_publisher').text();
    var appIcon = $('.appThumb img').attr('src');
    //var reviewKey = $("#reviewKey").text('review-key');
    var reviewDate = $('#ReviewDate').val();
    var reviewKey = $('#reviewKey').text() == null ? "" : $('#reviewKey').text();
    console.log("REVIEW KEY:" + reviewKey);
    var certificateRefferance = reviewKey;
    certificateRefferance = "CER" + certificateRefferance;
    reviewKey = reviewKey.replace(/[^a-zA-Z0-9_-]/g, '');
    //reviewKey = reviewKey.replace(",", "").replace(".", "");
    reviewKey = "CER".concat(reviewKey);
    var version = $("#orcha_appversion").text();

    var url = window.location.href;
    if (url.lastIndexOf("#") == window.location.href.length - 1) {
        url = url.substring(0, url.lastIndexOf('#'));
    }
    if (url.lastIndexOf("/") == window.location.href.length - 1) {
        url = url.substring(0, url.lastIndexOf('/'));
    }
    //url = url.trim('/');
    url = url.substring(0, url.lastIndexOf('/'));
    url = url.substring(0, url.lastIndexOf('/') + 1);
    url = url + "PreviewCertificate/" + reviewKey;


    //var url = window.location.href.split("NewReview");
    //url = url[0] + "PreviewCertificate/" + reviewKey;
    $("#PreviewCertificate").attr("href", url);
    var store = new Persist.Store(reviewKey);
    store.set("orchaValue", orchaValue);
    store.set("orchaRisk", orchaRisk);
    store.set("orchaLevel", orchaLevel);
    store.set("orchaNoOfDownload", downLoads);
    store.set("orchaNoOfReviews", reviews);
    //store.set("orchaNoOfRating", rating);
    store.set("orchaNoOfRating", (parseFloat(rating)).toFixed(1));
    store.set("orchaReviewDate", reviewDate);
    store.set("orchaAppName", appName);
    store.set("orchaAppPlatForm", appPlatForm);
    store.set("orchaSource", source);
    store.set("orchaPublisherName", appPublisherName);
    store.set("orchaAppIcon", appIcon);
    store.set("orchaAppVersion", version);
    store.set("orchacertificateRefferance", certificateRefferance);
    store.set("functionCaps", JSON.stringify(orchaAssessmentValues.LevelAssessment.FunctionCapabilities));
    store.set("reviewDate", reviewDate);


}

function updateReportData() {
    var orchaValue = orchaAssessmentValues.CalculatedValues.TotalActualValue
    var orchaRisk = orchaAssessmentValues.CalculatedValues.TotalActualRisk;
    var orchaLevel = orchaAssessmentValues.LevelAssessment.Level.Value;
    var downLoads = $('#orcha_app_downloads').text();
    if (downLoads == "") {
        downLoads = "Unstated number of";
    }
    var reviews = $('#orcha_app_reviews').text();
    var rating = $('#orcha_app_rating').text();
    var reviewDate = $('#ReviewDate').val();
    var appName = $('#orcha_appname').text();
    var appPlatForm = $('#orcha_app_platform').text();
    var source = $('#orcha_source').text();
    var appPublisherName = $('#orcha_publisher').text();
    var appIcon = $('.appThumb img').attr('src');
    //var reviewKey = $("#reviewKey").text('review-key');
    var reviewDate = $('#ReviewDate').val();
    var reviewKey = $('#reviewKey').text() == null ? "" : $('#reviewKey').text();
    console.log("REVIEW KEY:" + reviewKey);
    var certificateRefferance = reviewKey;
    certificateRefferance = "REP" + certificateRefferance;
    reviewKey = reviewKey.replace(/[^a-zA-Z0-9_-]/g, '');
    //reviewKey = reviewKey.replace(",", "").replace(".", "");
    reviewKey = "REP".concat(reviewKey);
    var version = $("#orcha_appversion").text();

    var url = window.location.href;
    if (url.lastIndexOf("#") == window.location.href.length - 1) {
        url = url.substring(0, url.lastIndexOf('#'));
    }
    if (url.lastIndexOf("/") == window.location.href.length - 1) {
        url = url.substring(0, url.lastIndexOf('/'));
    }
    //url = url.trim('/');
    url = url.substring(0, url.lastIndexOf('/'));
    url = url.substring(0, url.lastIndexOf('/') + 1);
    url = url + "PreviewReport/" + reviewKey;


    //var url = window.location.href.split("NewReview");
    //url = url[0] + "PreviewCertificate/" + reviewKey;
    $("#PreviewReport").attr("href", url);
    var store = new Persist.Store(reviewKey);
    store.set("orchaValue", orchaValue);
    store.set("orchaRisk", orchaRisk);
    store.set("orchaLevel", orchaLevel);
    store.set("orchaNoOfDownload", downLoads);
    store.set("orchaNoOfReviews", reviews);
    //store.set("orchaNoOfRating", rating);
    store.set("orchaNoOfRating", (parseFloat(rating)).toFixed(1));
    store.set("orchaReviewDate", reviewDate);
    store.set("orchaAppName", appName);
    store.set("orchaAppPlatForm", appPlatForm);
    store.set("orchaSource", source);
    store.set("orchaPublisherName", appPublisherName);
    store.set("orchaAppIcon", appIcon);
    store.set("orchaAppVersion", version);
    store.set("orchacertificateRefferance", certificateRefferance);
    store.set("functionCaps", JSON.stringify(orchaAssessmentValues.LevelAssessment.FunctionCapabilities));
    store.set("reviewDate", reviewDate);

    store.set("DataValue", orchaAssessmentValues.Data.ValueScoreOutOfAllocation);
    store.set("DataRisk", orchaAssessmentValues.Data.RiskScoreOutOfAllocation);

    store.set("DesignValue", orchaAssessmentValues.DesignAndTesting.ValueScoreOutOfAllocation);
    store.set("DesignRisk", orchaAssessmentValues.DesignAndTesting.RiskScoreOutOfAllocation);

    store.set("ClinicalValue", orchaAssessmentValues.ClinicalAssuranceAndEfficacy.ValueScoreOutOfAllocation);
    store.set("ClinicalRisk", orchaAssessmentValues.ClinicalAssuranceAndEfficacy.RiskScoreOutOfAllocation);

    store.set("UserExperienceValue", orchaAssessmentValues.UserExperience.ValueScoreOutOfAllocation);
    store.set("UserExperienceRisk", orchaAssessmentValues.UserExperience.RiskScoreOutOfAllocation);

    store.set("UserContribution", orchaAssessmentValues.UserScoreContribution.ValueScoreOutOfAllocation);

    store.set("DataQuestions", getSectionQuestions('d'));
    store.set("DesignQuestions", getSectionQuestions('dt'));
    store.set("ClinicalQuestions", getSectionQuestions("ae"));
    store.set("UserExperienceQuestions", getSectionQuestions("u"));

}


function getSectionQuestions(section) {

    switch (section.toLowerCase()) {
        case "d":
            var dataQuestions = showInReport.filter(function (item) {
                if (item.indexOf("D") > -1 && item.indexOf("DT") < 0)
                    return true;
            });
            return dataQuestions;

        case "dt":
            var designQuestions = showInReport.filter(function (item) {
                if (item.indexOf("DT") > -1)
                    return true;
            });
            return designQuestions;

        case "ae":
            var clinicalQuestions = showInReport.filter(function (item) {
                if (item.indexOf("AE") > -1)
                    return true;
            });
            return clinicalQuestions;

        case "u":
            var ueQuestions = showInReport.filter(function (item) {
                if (item.indexOf("U") > -1)
                    return true;
            });
            return ueQuestions;
    }
}

