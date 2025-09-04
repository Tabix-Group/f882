"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const StepsToDoPage_1 = __importDefault(require("./pages/StepsToDoPage"));
const HomePage_1 = __importDefault(require("./pages/HomePage"));
const RegisterPage_1 = __importDefault(require("./pages/RegisterPage"));
const WhatIsF88Page_1 = __importDefault(require("./pages/WhatIsF88Page"));
const VideosTestimonialsPage_1 = __importDefault(require("./pages/VideosTestimonialsPage"));
const BuyBookPage_1 = __importDefault(require("./pages/BuyBookPage"));
const BuyBookMentorPage_1 = __importDefault(require("./pages/BuyBookMentorPage"));
const ProceedToPaymentPage_1 = __importDefault(require("./pages/ProceedToPaymentPage"));
const PaymentPage_1 = __importDefault(require("./pages/PaymentPage"));
const ConfirmationPage_1 = __importDefault(require("./pages/ConfirmationPage"));
const AccessProgramMaterialsPage_1 = __importDefault(require("./pages/AccessProgramMaterialsPage"));
const AccessMentorPage_1 = __importDefault(require("./pages/AccessMentorPage"));
const StartF88FitnessChangePage_1 = __importDefault(require("./pages/StartF88FitnessChangePage"));
const AccessWill88DayProgramPage_1 = __importDefault(require("./pages/AccessWill88DayProgramPage"));
const EndPage_1 = __importDefault(require("./pages/EndPage"));
const CustomerServicePage_1 = __importDefault(require("./pages/CustomerServicePage"));
const LoginPage_1 = __importDefault(require("./pages/LoginPage"));
const Layout_1 = __importDefault(require("./components/Layout"));
const ReadBookPage_1 = __importDefault(require("./pages/ReadBookPage"));
const UserDashboard_1 = __importDefault(require("./pages/UserDashboard"));
const JordanChat_1 = __importDefault(require("./pages/JordanChat"));
const F88AssessmentPage_1 = __importDefault(require("./pages/F88AssessmentPage"));
const TrainingCalendarPage_1 = __importDefault(require("./pages/TrainingCalendarPage"));
const AuthContext_1 = require("./contexts/AuthContext");
function App() {
    return (<AuthContext_1.AuthProvider>
      <react_router_dom_1.BrowserRouter>
        <Layout_1.default>
          <react_router_dom_1.Routes>
            <react_router_dom_1.Route path="/" element={<HomePage_1.default />}/>
            <react_router_dom_1.Route path="/steps-to-do" element={<StepsToDoPage_1.default />}/>
            <react_router_dom_1.Route path="/register" element={<RegisterPage_1.default />}/>
            <react_router_dom_1.Route path="/login" element={<LoginPage_1.default />}/>
            <react_router_dom_1.Route path="/what-is-f88" element={<WhatIsF88Page_1.default />}/>
            <react_router_dom_1.Route path="/videos-testimonials" element={<VideosTestimonialsPage_1.default />}/>
            <react_router_dom_1.Route path="/buy-book" element={<BuyBookPage_1.default />}/>
            <react_router_dom_1.Route path="/buy-book-mentor" element={<BuyBookMentorPage_1.default />}/>
            <react_router_dom_1.Route path="/proceed-to-payment" element={<ProceedToPaymentPage_1.default />}/>
            <react_router_dom_1.Route path="/payment" element={<PaymentPage_1.default />}/>
            <react_router_dom_1.Route path="/confirmation" element={<ConfirmationPage_1.default />}/>
            <react_router_dom_1.Route path="/access-program-materials" element={<AccessProgramMaterialsPage_1.default />}/>
            <react_router_dom_1.Route path="/access-mentor" element={<AccessMentorPage_1.default />}/>
            <react_router_dom_1.Route path="/start-f88-fitness-change" element={<StartF88FitnessChangePage_1.default />}/>
            <react_router_dom_1.Route path="/access-will-88-day-program" element={<AccessWill88DayProgramPage_1.default />}/>
            <react_router_dom_1.Route path="/end" element={<EndPage_1.default />}/>
            <react_router_dom_1.Route path="/customer-service" element={<CustomerServicePage_1.default />}/>
            <react_router_dom_1.Route path="/read-book" element={<ReadBookPage_1.default />}/>
            <react_router_dom_1.Route path="/dashboard" element={<UserDashboard_1.default />}/>
            <react_router_dom_1.Route path="/jordan-chat" element={<JordanChat_1.default />}/>
            <react_router_dom_1.Route path="/f88-assessment" element={<F88AssessmentPage_1.default />}/>
            <react_router_dom_1.Route path="/training-calendar" element={<TrainingCalendarPage_1.default />}/>
          </react_router_dom_1.Routes>
        </Layout_1.default>
      </react_router_dom_1.BrowserRouter>
    </AuthContext_1.AuthProvider>);
}
exports.default = App;
