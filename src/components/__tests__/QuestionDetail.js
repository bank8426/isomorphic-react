import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";
describe(`Question Detail Component`, () => {
  describe(`Container element`, () => {
    describe(`mapStateToProps`, () => {
      it(`should map state to props correctly`, () => {
        const sampleQuestion = {
          question_id: 42,
          body: "Space is big"
        };
        const appState = { questions: [sampleQuestion] };
        const ownProps = { question_id: 42 };
        const componentState = mapStateToProps(appState, ownProps);
      });
    });
  });
  describe(`display element`, () => {
    it(`Should not regress`, () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="The of life"
          body="43"
          answer_count={0}
          tags={[`hitchhiking`]}
        />
      );
      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
