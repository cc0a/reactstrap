import React, { Component } from 'react';
import './documents.scss';
import Navbar from '../../components/Navbar/Navbar';

export class Documents extends Component {
    render() {
        return (
            <div className="documents-div">
                <div className="documents-content">
                    <h2 className="document-heading">Documents Needed for First Appointment</h2>
                    <h5>
                    You will need the following documents for your meeting (if you cannot obtain all of them, you can send to me later):
                    </h5>
                    <p className="document-specs">
                    1. 2018 and 2019 tax returns. I only need taxes IF YOU ARE REQUIRED TO FILE TAXES. If you are not required to file taxes by law, that's ok.  If you can't find your taxes obtain a tax transcript online or through the IRS office:
Free transcript available from IRS office ONLINE:</p><p><a href="http://www.irs.gov/Individuals/Get-Transcript">http://www.irs.gov/Individuals/Get-Transcript </a></p>
                    <p className="document-specs">
                    2. Paystubs for the last 6 months (or detailed payroll print out broken down by month showing payroll deductions) for all jobs worked in the last 6 months. Business Owners /Self-Employed need a profit and loss statement for the last 12 months.
                    </p>
                    <p className="document-specs">
                    3. Credit Reports from www.annualCreditReport.com   
This is a free site- obtain all three reports from Transunion, Equifax and Experian (you will have to choose one at a time, so you will fill out the information page THREE times). If you are unable to use the free site, go to each site and pay for them transunion.com experian.com equifax.com  they are not expensive). I CANNOT USE REPORTS FROM OTHER WEBSITES. Ignore offers for credit scores- they are irrelevant.  You may have to send a request by mail- please follow the instructions. Download and SAVE AS A PDF!  
                    </p>
                    <p className="document-specs">
                    4. Debts that are NOT ON YOUR CREDIT REPORT:  Payday Loan Statements, Collections, Lawsuit documents, back taxes  (please do not include duplicate bills or monthly expenses/bills such as rent, utilities, etc. If you have a large, past due utility bill please tell us about that so we can discuss adding it to the bankruptcy). We need to know everything! Don't have the bill? Then write a list. There is no such thing as keeping paid off accounts open - everything closes, and everything you owe is listed (specialized doctor? Talk to us!)
                    </p>
                    <p className="document-specs">
                    5. Three (3) months of bank statements for all open bank accounts.
                    </p>
                    <p className="document-specs">
                        6. Writ of Garnishment if you are being garnished (available from your payroll department).
                    </p>
                    <p className="document-specs">
                    7. NADA or Kelly Blue Book TRADE-IN value for all vehicles owned (not mandatory that you do this, but it will save time and it's good to know what your vehicle is worth!)
                    </p>
                    <p className="document-specs">
                    CALL OR TEXT 970-660-4436 WHEN YOU ARE READY FOR AN APPOINTMENT .. office hours are 12-730 pm. Your appointment will take about 45 -60 minutes.   $300 down is due at the first meeting. We accept VENMO or ZELLE, Cash or Check. 
                    </p>
                    <p className="document-specs">
                    If you cannot obtain ALL documents for the first appointment, you can send after the appointment. We need at least a TRANSUNION credit report and your PAY DOCUMENTATION to get you started. Talk to me if any of this is confusing - I'm here to help! Thanks, Christy 970-660-4436
                    </p>
                </div>
            </div> 
        )
    }
}

export default Documents;