import { ByRoleMatcher, Matcher, screen } from '@testing-library/react';

/**
 * ## コンポーネントの表示テスト
 *
 * ## 引数
 * - roleMaatch(任意): 補足対象のロールを指定
 * - textMatch: 比較文字列
 */
export const viewTest = ({
  roleMaatch,
  textMatch,
}: {
  roleMaatch?: ByRoleMatcher;
  textMatch: Matcher;
}) => {
  const testTarget = roleMaatch ? screen.getByRole(roleMaatch) : screen.getByText(textMatch);
  expect(testTarget).toHaveTextContent(textMatch.toString());
};
