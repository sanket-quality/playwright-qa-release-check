
# EventHub — Test Strategy

## 1. Document Information

| Field | Details |
|---|---|
| Project | EventHub QA Portfolio |
| Application | https://eventhub.rahulshettyacademy.com/login |
| Document Type | Test Strategy |
| Version | 0.1 |
| Status | Draft — Pending Application Reconnaissance |
| Testing Tools | Playwright, JavaScript, GitHub Actions |
| Reporting | Playwright HTML Report; Allure optional |

## 2. Objective

The objective of this project is to evaluate the quality of the EventHub
practice application through structured manual testing, risk-based test
design, API validation, and automated end-to-end regression testing.

This project will demonstrate the ability to:

- Design test scenarios from observed application behavior.
- Validate positive, negative, boundary, and edge cases.
- Identify and document defects with reproducible evidence.
- Automate critical workflows using Playwright and JavaScript.
- Validate REST API behavior and relevant data consistency.
- Execute automated tests through GitHub Actions.
- Run tests in parallel using Playwright sharding.
- Communicate test coverage, results, risks, and limitations clearly.

This is an independent portfolio project using a publicly accessible
practice application. It is not a production-client engagement.

## 3. Application Overview

EventHub is a web application intended for practicing event discovery
and ticket-booking workflows.

The initial investigation will focus on:

- User registration and authentication.
- Event listing and event details.
- Event search and filtering, where available.
- Booking workflows and booking-related validation.
- API functionality exposed through the application's documentation.

The exact functionality, business rules, and supported operations will
be confirmed through manual exploration and API documentation review.

Features not available in the application will be documented as
not applicable rather than assumed to exist.

## 4. Scope of Testing

### 4.1 In Scope

**Functional Testing**
- User registration and form validations.
- Login, invalid credentials, and authentication behavior.
- Navigation and event listing behavior.
- Event details and supported search/filter functionality.
- Booking creation and booking-related validations.
- Booking history or cancellation, if supported.
- Required fields, invalid input, and boundary conditions.

**API Testing**
- Event list retrieval.
- Event details retrieval by ID.
- Booking creation, where supported.
- Booking deletion, where supported.
- HTTP status codes and response structure.
- Valid and invalid request data.
- Authentication and authorization behavior.
- UI/API data consistency where applicable.

**Automation Testing**
- Critical UI smoke scenarios.
- Selected functional regression scenarios.
- API functional tests using Playwright APIRequestContext.
- Reusable page objects and fixtures where appropriate.
- Reliable assertions and diagnostic evidence.

**CI/CD**
- Automated execution on pushes and pull requests.
- Test reporting through GitHub Actions artifacts.
- Parallel execution using Playwright sharding.
- Consolidated reporting after shard execution.

### 4.2 Out of Scope

- Load, stress, and performance testing.
- Penetration testing or destructive security testing.
- Testing against unauthorized production systems.
- Real financial transactions or payment processing.
- Testing unavailable application features.
- Exhaustive accessibility certification.
- Mobile-native application testing.

Basic accessibility and cross-browser checks may be added later
if supported by the application's functionality and project time.

## 5. Test Approach

### 5.1 Manual Testing

Manual testing will be completed before automating each major feature.

The process will be:

1. Explore the application and identify available functionality.
2. Record observed workflows, validation messages, and business rules.
3. Create test scenarios and detailed test cases.
4. Execute positive and negative scenarios.
5. Investigate boundary conditions and potential failure paths.
6. Record reproducible defects with supporting evidence.
7. Update documentation based on actual observations.

### 5.2 UI Automation

Playwright with JavaScript will be used to automate selected critical
user journeys.

The automation approach will include:

- Playwright Test runner.
- Role-based and label-based locators where appropriate.
- Page Object Model where it improves maintainability.
- Shared fixtures and reusable helpers.
- Web-first assertions.
- Explicit handling of asynchronous application behavior.
- Screenshots, traces, and useful failure diagnostics.
- Test tags for smoke and regression execution.

Arbitrary fixed waits will be avoided wherever a reliable condition-based
wait or assertion can be used.

### 5.3 API Testing

Playwright's API testing capabilities will be used to validate supported
REST endpoints independently of the UI.

API tests will verify:

- Expected HTTP status codes.
- Response data types and required fields.
- Input validation and error handling.
- Behavior for invalid or nonexistent resource IDs.
- Authentication requirements.
- Data consistency between related operations.

Endpoints and expected responses will be confirmed through the
application's API documentation before test implementation.

### 5.4 CI/CD and Parallel Execution

GitHub Actions will execute selected tests automatically on pushes and
pull requests.

The pipeline will initially use a small number of parallel shards.
Each shard must be independently executable without relying on the
execution order of other tests.

The final workflow will collect test results and publish the available
reports as workflow artifacts.

Allure reporting may be introduced after the initial Playwright and
GitHub Actions setup is stable.

## 6. Test Prioritization

Tests will be prioritized according to business impact and risk.

| Priority | Meaning | Examples |
|---|---|---|
| P0 | Critical workflow blocked | Essential authentication or booking operation unavailable |
| P1 | Important functionality affected | Invalid input accepted or a core event workflow fails |
| P2 | Limited impact | Non-critical validation, layout, or navigation issue |
| P3 | Minor impact | Cosmetic inconsistency with no significant functional impact |

Priorities are assigned based on observed behavior and assessed impact.
They are not automatic classifications based solely on a test failure.

## 7. Test Data and Environment

### Test Environment

- Application: EventHub practice environment.
- Local execution: Windows and Node.js.
- Automation: Playwright with JavaScript.
- Version control: Git and GitHub.
- CI environment: GitHub Actions.
- Initial browser: Chromium.
- Reporting: Playwright HTML report.

Additional browsers may be included after the initial suite is stable.

### Test Data Guidelines

- Use an authorized sandbox account.
- Use test data specifically intended for the practice environment.
- Generate unique account data when required.
- Avoid unnecessary use of personal information.
- Keep passwords, tokens, and other secrets out of source control.
- Use GitHub Actions secrets for credentials required by CI.
- Do not commit local authentication state or environment files.
- Do not perform destructive or high-volume tests without authorization.

## 8. Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Sandbox unavailable | Record environment issues separately from product defects |
| Application behavior changes | Review failures and update tests only after investigation |
| Shared test data causes conflicts | Use isolated data and independent test setup |
| Unstable UI selectors | Prefer accessible, meaningful locators |
| Parallel execution causes interference | Avoid shared mutable state and coordinate destructive operations |
| Credentials are exposed | Use environment variables and protected CI secrets |
| Unsupported features are assumed | Confirm functionality through exploration and API documentation |

## 9. Defect Reporting

Each confirmed defect should include:

- Unique defect identifier.
- Clear and concise title.
- Environment and browser.
- Preconditions and test data.
- Steps to reproduce.
- Expected result.
- Actual result.
- Severity and priority.
- Screenshot, trace, or other relevant evidence.
- Reproducibility and current status.

Application failures, environmental issues, and automation-script
failures must be investigated separately before a defect is reported.

Only reproducible findings will be presented as confirmed defects.
Hypothetical examples will be clearly identified as simulated.

## 10. Entry Criteria

Testing can begin when:

- The practice application is accessible.
- The required account and test environment are available.
- The main workflows can be explored.
- Supported API documentation is available where needed.
- The local Playwright project can execute a basic test.

## 11. Exit Criteria

The initial project milestone will be considered complete when:

- Critical available workflows have documented test coverage.
- Positive, negative, and relevant boundary cases have been considered.
- Selected UI and API tests execute reliably.
- The automated suite runs in GitHub Actions.
- Sharded execution and report collection work as configured.
- Results and reproducible defects are documented.
- Known limitations and untested areas are disclosed.

Completion does not imply that the application is defect-free.

## 12. Deliverables

The project will contain:

- Test strategy.
- Test plan.
- Manual test cases in CSV format.
- Edge-case documentation.
- Defect report template and sample reports.
- Playwright JavaScript test framework.
- UI and API automated tests.
- GitHub Actions workflow.
- Sharded test execution.
- Playwright HTML report.
- Optional Allure report.
- Final test summary.

## 13. Current Status and Next Steps

Current status: Documentation and framework foundation.

Next activities:

1. Perform manual reconnaissance of EventHub.
2. Confirm available features and business rules.
3. Review the API documentation.
4. Complete the detailed test plan and manual test cases.
5. Implement and validate the automation incrementally.
6. Integrate CI execution, sharding, and reporting.
7. Publish the final portfolio documentation and results.
