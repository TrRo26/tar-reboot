import DBCLogo from "../../../images/dbc_logo.jpeg"
import SUSeal from "../../../images/su_seal.png"
import MSUSeal from "../../../images/msu_seal.png"

export function devBootcampEduData() {
    var devBootcampEduData = {
        eduSeal: DBCLogo,
        eduInstitute: "DevBootcamp",
        eduLocation: "Chicago, Illinois",
        eduDegree: "Coding School Graduate in Full Stack Web Development",
        eduDate: "June 2016 to December 2016",
        EduDepartment: ""
    }
    return devBootcampEduData
}

export function stockholmUniData() {
    var stockholmUniData = {
        eduSeal: SUSeal,
        eduInstitute: "Stockholm University",
        eduLocation: "Stockholm, Sweden",
        eduDegree: "Master of Science in International and Comparative Education",
        eduDate: "August 2012 to May 2014",
        EduDepartment: "Department of Education"
    }
    return stockholmUniData
}

export function msuData() {
    var msuData = {
        eduSeal: MSUSeal,
        eduInstitute: "Michigan State University",
        eduLocation: "East Lansing, Michigan",
        eduDegree: "Bachelor of Arts in Hospitality Business",
        eduDate: "August 2000 to May 2005",
        EduDepartment: "Eli Broad College of Business"
    }
    return msuData
}