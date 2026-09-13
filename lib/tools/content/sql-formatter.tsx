import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>SQL Formatter: Free Online SQL Beautifier, Formatter, and Pretty Printer</h2>
        <p>
          SQL written in the heat of development "” from query logs, ORM debug output, copied-from-
          production dashboards, or compressed for API transmission "” is often a single dense line
          impossible to read. Our free online SQL formatter instantly transforms minified, poorly
          indented, or inconsistently formatted SQL into clean, readable, properly structured queries
          with consistent casing, aligned keywords, and logical indentation. Supports all major SQL
          dialects: MySQL, PostgreSQL, SQL Server (T-SQL), Oracle (PL/SQL), SQLite, BigQuery, Snowflake,
          Amazon Redshift, and ANSI SQL.
        </p>
        <p>
          Whether you are debugging a complex multi-table JOIN that returned unexpected results, reviewing
          a stored procedure that a previous developer wrote in one continuous line, optimizing a slow
          query by making its structure visible, or preparing SQL for documentation or a code review,
          our formatter makes the logic immediately clear. All formatting runs in your browser "” no query
          content is sent to any server.
        </p>

        <h2>Why SQL Formatting Matters for Developer Productivity</h2>
        <p>
          SQL is fundamentally different from most programming languages in that its logical structure "”
          which tables are joined, which conditions filter rows, which expressions are aggregated "” is
          completely invisible in unformatted SQL. A 200-character single-line query and the same query
          formatted across 30 lines of clear indentation contain identical information for the database
          engine, but the cognitive load for a human developer is vastly different.
        </p>
        <p>
          Unformatted SQL creates specific problems:
        </p>
        <ul>
          <li>
            <strong>Join conditions invisible at a glance</strong>: a multi-table join where the ON
            clause is buried in the middle of a long line requires careful parsing to understand which
            tables are connected and on what keys.
          </li>
          <li>
            <strong>WHERE clause complexity hidden</strong>: nested AND/OR conditions with complex
            precedence are easy to misread when unindented, leading to incorrect query assumptions.
          </li>
          <li>
            <strong>Subquery boundaries unclear</strong>: subqueries and correlated subqueries embedded
            inline are difficult to identify and mentally scope.
          </li>
          <li>
            <strong>CTE structure lost</strong>: WITH clauses with multiple CTEs lose their logical
            separation when formatted as a wall of text.
          </li>
          <li>
            <strong>Code review friction</strong>: reviewers must mentally format unindented SQL before
            they can evaluate its correctness.
          </li>
        </ul>

        <h2>SQL Formatting Standards and Conventions</h2>
        <p>
          Unlike programming languages with enforced style guides (Go's gofmt, Rust's rustfmt), SQL
          has no single canonical formatting standard. However, several widely-adopted conventions have
          emerged from decades of SQL community practice:
        </p>

        <h3>Keyword Casing</h3>
        <p>
          The most common convention is uppercase keywords: <code>SELECT</code>, <code>FROM</code>,
          <code>WHERE</code>, <code>JOIN</code>, <code>GROUP BY</code>, <code>ORDER BY</code>,
          <code>HAVING</code>, <code>LIMIT</code>. This provides visual contrast between SQL structural
          keywords and user-defined names (table names, column names, aliases) which are typically
          lowercase or mixed case. Our formatter offers: UPPER keywords (default), lowercase keywords,
          and preserve (leave as-is).
        </p>

        <h3>Clause-Per-Line Layout</h3>
        <p>
          The most readable formatting puts each major SQL clause on its own line:
        </p>
        <pre>{`SELECT
    u.id,
    u.email,
    COUNT(o.id) AS order_count,
    SUM(o.total_amount) AS total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE u.created_at >= '2024-01-01'
    AND u.status = 'active'
GROUP BY u.id, u.email
HAVING COUNT(o.id) > 0
ORDER BY total_spent DESC
LIMIT 100;`}</pre>
        <p>
          This layout makes the query structure immediately parseable: you can scan the left margin to
          understand the full query structure before reading the details.
        </p>

        <h3>Indentation of Column Lists</h3>
        <p>
          SELECT columns are typically indented 4 spaces under the SELECT keyword. When there are many
          columns, each goes on its own line. Computed columns and aliases are aligned for readability.
        </p>

        <h3>JOIN Formatting</h3>
        <p>
          Each JOIN clause goes on its own line with the ON condition on the next line, indented:
        </p>
        <pre>{`FROM orders o
INNER JOIN users u ON o.user_id = u.id
LEFT JOIN order_items oi ON o.id = oi.order_id
    AND oi.deleted_at IS NULL`}</pre>

        <h3>WHERE Clause Alignment</h3>
        <p>
          Multiple conditions in WHERE are aligned with AND/OR at the start of each condition line
          (not at the end of the previous line). This makes it easy to comment out individual conditions
          during debugging:
        </p>
        <pre>{`WHERE status = 'active'
    AND created_at >= '2024-01-01'
    AND email NOT LIKE '%@test.com'`}</pre>

        <h2>SELECT Statement Formatting in Detail</h2>
        <p>
          The SELECT statement is the most complex SQL construct to format because of its many optional
          clauses and the variety of expressions that can appear in each. Our formatter handles:
        </p>

        <h3>DISTINCT and TOP/LIMIT Modifiers</h3>
        <p>
          <code>SELECT DISTINCT</code> is treated as a compound keyword. SQL Server's <code>SELECT TOP 100</code>
          and MySQL's <code>LIMIT</code> clause are formatted at the correct positions for each dialect.
        </p>

        <h3>Column Expressions</h3>
        <p>
          Complex column expressions "” CASE statements, aggregate functions, string operations, date
          functions "” are formatted with appropriate indentation to make their structure clear:
        </p>
        <pre>{`SELECT
    user_id,
    CASE
        WHEN status = 'premium' THEN 1
        WHEN status = 'trial' THEN 2
        ELSE 0
    END AS status_priority,
    COALESCE(
        last_login_at,
        created_at
    ) AS effective_date`}</pre>

        <h3>Subqueries in SELECT</h3>
        <p>
          Scalar subqueries in the SELECT list are indented to visually separate them from the outer
          query level:
        </p>
        <pre>{`SELECT
    u.email,
    (
        SELECT COUNT(*)
        FROM orders o
        WHERE o.user_id = u.id
    ) AS order_count`}</pre>

        <h2>JOIN Types and Their Formatting</h2>
        <p>
          SQL has seven types of JOINs, each with different semantics that the formatter preserves
          and makes explicit:
        </p>
        <ul>
          <li>
            <strong>INNER JOIN</strong> (or just JOIN): returns rows where the condition matches in
            both tables. The most common join type.
          </li>
          <li>
            <strong>LEFT JOIN / LEFT OUTER JOIN</strong>: returns all rows from the left table and
            matching rows from the right; NULLs for non-matching right-side columns.
          </li>
          <li>
            <strong>RIGHT JOIN / RIGHT OUTER JOIN</strong>: returns all rows from the right table;
            usually rewritten as a LEFT JOIN for consistency.
          </li>
          <li>
            <strong>FULL OUTER JOIN</strong>: returns all rows from both tables; NULLs where no match.
          </li>
          <li>
            <strong>CROSS JOIN</strong>: Cartesian product "” every row from left table paired with every
            row from right table. Rarely used intentionally; often a bug.
          </li>
          <li>
            <strong>SELF JOIN</strong>: joining a table to itself using aliases to query hierarchical
            or comparative data within the same table.
          </li>
        </ul>
        <p>
          Our formatter normalizes JOIN keyword casing and ensures each JOIN with its ON condition
          is visually distinct from the main query clauses.
        </p>

        <h2>Subqueries: Inline, Derived Tables, and CTEs</h2>

        <h3>Inline Subqueries</h3>
        <p>
          Subqueries in WHERE clauses (EXISTS, IN, comparison operators) are formatted with the inner
          SELECT indented beneath the outer condition:
        </p>
        <pre>{`WHERE user_id IN (
    SELECT id
    FROM users
    WHERE status = 'premium'
)`}</pre>

        <h3>Derived Table Subqueries</h3>
        <p>
          Subqueries used as derived tables in the FROM clause are formatted as a named block:
        </p>
        <pre>{`FROM (
    SELECT
        user_id,
        SUM(amount) AS total
    FROM payments
    GROUP BY user_id
) AS payment_totals`}</pre>

        <h3>Common Table Expressions (CTEs)</h3>
        <p>
          CTEs using the WITH clause are formatted as named, clearly separated blocks. Multiple CTEs
          in a single WITH clause are separated with clear visual breaks:
        </p>
        <pre>{`WITH
active_users AS (
    SELECT id, email
    FROM users
    WHERE status = 'active'
),
user_orders AS (
    SELECT
        user_id,
        COUNT(*) AS order_count
    FROM orders
    GROUP BY user_id
)
SELECT
    u.email,
    COALESCE(o.order_count, 0) AS orders
FROM active_users u
LEFT JOIN user_orders o ON u.id = o.user_id`}</pre>

        <h3>Recursive CTEs</h3>
        <p>
          Recursive CTEs, used for hierarchical data (organization trees, bill of materials, graph traversal),
          have the anchor and recursive members clearly distinguished:
        </p>
        <pre>{`WITH RECURSIVE category_tree AS (
    SELECT id, name, parent_id, 0 AS depth
    FROM categories
    WHERE parent_id IS NULL

    UNION ALL

    SELECT c.id, c.name, c.parent_id, ct.depth + 1
    FROM categories c
    INNER JOIN category_tree ct ON c.parent_id = ct.id
)
SELECT * FROM category_tree ORDER BY depth, name`}</pre>

        <h2>Window Functions Formatting</h2>
        <p>
          Window functions (analytic functions) like <code>ROW_NUMBER()</code>, <code>RANK()</code>,
          <code>LAG()</code>, <code>SUM() OVER()</code> are formatted to make the OVER clause clearly
          readable:
        </p>
        <pre>{`SELECT
    employee_id,
    department_id,
    salary,
    ROW_NUMBER() OVER (
        PARTITION BY department_id
        ORDER BY salary DESC
    ) AS salary_rank,
    SUM(salary) OVER (
        PARTITION BY department_id
    ) AS dept_total_salary`}</pre>

        <h2>SQL Dialects: Key Differences Handled by Our Formatter</h2>

        <h3>MySQL / MariaDB</h3>
        <p>
          MySQL uses backtick quoting for identifiers (<code>`table_name`</code>), supports
          <code>LIMIT offset, count</code> syntax, and includes MySQL-specific functions like
          <code>GROUP_CONCAT()</code>, <code>IF()</code>, and <code>IFNULL()</code>. Our formatter
          recognizes backtick identifiers and correctly handles MySQL-specific syntax.
        </p>

        <h3>PostgreSQL</h3>
        <p>
          PostgreSQL uses double-quote identifiers (<code>"TableName"</code>), supports arrays, JSON
          operators (<code>-&gt;</code>, <code>-&gt;&gt;</code>, <code>@&gt;</code>), the DISTINCT ON
          extension, <code>RETURNING</code> clauses, and <code>ON CONFLICT</code> upsert syntax.
          PostgreSQL-specific aggregate functions, window functions, and type casts (<code>::</code>)
          are formatted correctly.
        </p>

        <h3>SQL Server / T-SQL</h3>
        <p>
          T-SQL uses square bracket identifiers (<code>[column name]</code>), <code>TOP</code> instead
          of <code>LIMIT</code>, <code>IDENTITY</code> columns, and T-SQL-specific syntax like
          <code>BEGIN...END</code> blocks, <code>TRY...CATCH</code>, and stored procedure syntax.
        </p>

        <h3>Oracle PL/SQL</h3>
        <p>
          Oracle uses <code>ROWNUM</code> (and newer <code>FETCH FIRST n ROWS ONLY</code>), <code>NVL()</code>
          instead of COALESCE, and PL/SQL-specific constructs. <code>CONNECT BY</code> for hierarchical
          queries is Oracle-specific and formatted accordingly.
        </p>

        <h3>BigQuery / Snowflake / Redshift</h3>
        <p>
          Modern cloud data warehouse SQL dialects have unique features: BigQuery's nested and repeated
          fields, Snowflake's VARIANT/ARRAY/OBJECT types, Redshift's distribution keys and sort keys.
          Select your target dialect in our formatter for dialect-specific keyword recognition and formatting.
        </p>

        <h2>DML Statements: INSERT, UPDATE, DELETE</h2>

        <h3>INSERT Formatting</h3>
        <p>
          INSERT INTO statements with multiple columns and values are formatted with each value set on
          its own line for readability. Multi-row INSERTs group each tuple logically:
        </p>
        <pre>{`INSERT INTO users (email, name, created_at)
VALUES
    ('alice@example.com', 'Alice Smith', NOW()),
    ('bob@example.com', 'Bob Jones', NOW()),
    ('charlie@example.com', 'Charlie Brown', NOW());`}</pre>

        <h3>UPDATE Formatting</h3>
        <p>
          UPDATE statements format each SET clause on its own line:
        </p>
        <pre>{`UPDATE users
SET
    status = 'inactive',
    updated_at = NOW(),
    deactivation_reason = 'terms_violation'
WHERE id = 12345
    AND status != 'deleted';`}</pre>

        <h3>DELETE Formatting</h3>
        <p>
          DELETE statements are formatted with the WHERE clause clearly visible "” missing WHERE clauses
          (which delete all rows) are among the most catastrophic SQL mistakes. Our formatter optionally
          warns when a DELETE statement has no WHERE clause.
        </p>

        <h2>DDL Statements: CREATE, ALTER, DROP</h2>
        <p>
          Data Definition Language statements are formatted with consistent column alignment:
        </p>
        <pre>{`CREATE TABLE orders (
    id          BIGINT          NOT NULL AUTO_INCREMENT,
    user_id     BIGINT          NOT NULL,
    status      VARCHAR(50)     NOT NULL DEFAULT 'pending',
    total       DECIMAL(10, 2)  NOT NULL DEFAULT 0.00,
    created_at  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
    INDEX idx_user_id (user_id),
    INDEX idx_status_created (status, created_at)
);`}</pre>

        <h2>Stored Procedures and Functions</h2>
        <p>
          Our formatter handles procedural SQL extensions including stored procedures, functions, triggers,
          and loops. BEGIN...END blocks are properly indented. IF/THEN/ELSE constructs are formatted with
          clear nesting. Variable declarations are aligned.
        </p>

        <h2>SQL Formatting for Code Reviews and Documentation</h2>
        <p>
          Formatted SQL significantly improves code review quality. Reviewers can quickly identify:
          missing indexes (by seeing which columns appear in WHERE/JOIN/ORDER BY), potential N+1 query
          patterns, missing WHERE clauses on DELETE/UPDATE, incorrect JOIN types (INNER where LEFT was
          intended), and GROUP BY columns that don't match SELECT columns.
        </p>
        <p>
          For documentation "” README files, wiki pages, Confluence docs, architecture decision records "”
          formatted SQL with consistent style communicates intent clearly to readers unfamiliar with
          the specific implementation. Include the formatted query alongside an explanation of what it
          does and why.
        </p>

        <h2>Integrating SQL Formatting into Development Workflow</h2>

        <h3>IDE Plugins</h3>
        <p>
          Major IDEs have SQL formatting plugins: SQL Formatter for VS Code, DataGrip (JetBrains) has
          built-in SQL formatting with dialect support, DBeaver includes a SQL formatter in its editor.
          Configure these to match your team's conventions so all SQL in the codebase is formatted
          consistently.
        </p>

        <h3>Pre-commit Hooks</h3>
        <p>
          Add SQL formatting to your pre-commit hook pipeline using tools like <code>sqlfluff</code>
          (a powerful Python-based SQL linter and formatter that supports many dialects) or
          <code>sql-formatter</code> (an npm package). Consistent formatting enforced at commit time
          eliminates formatting debates in code reviews.
        </p>

        <h3>ORM Query Debug Output</h3>
        <p>
          ORMs like Django ORM, SQLAlchemy, ActiveRecord, Hibernate, and Sequelize can log generated
          SQL queries, but the output is typically a single-line, unformatted string. Paste ORM-generated
          SQL into our formatter to understand what the ORM is generating "” essential for debugging
          performance issues and N+1 queries.
        </p>

        <h2>Privacy and Performance</h2>
        <p>
          All SQL formatting runs entirely in your browser using JavaScript. No SQL content "” including
          table names, column names, data values embedded in INSERT statements, or query logic "” is
          transmitted to our servers. The formatter handles queries of any complexity and length without
          performance degradation. Your database schema, business logic, and data remain completely private.
        </p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What is a SQL formatter?',
    answer:
      'A SQL formatter takes unformatted, compressed, or inconsistently styled SQL and outputs it in a readable, consistently indented format with proper keyword casing, aligned columns, and logical structure. It makes complex queries readable without changing their semantics.',
  },
  {
    category: 'General',
    question: 'Does formatting change how my SQL query runs?',
    answer:
      'No "” SQL formatting only changes whitespace and optionally keyword casing. The database engine ignores formatting entirely. A formatted and unformatted query with identical syntax produce identical execution plans and results.',
  },
  {
    category: 'General',
    question: 'What SQL dialects does the formatter support?',
    answer:
      'Our formatter supports MySQL/MariaDB, PostgreSQL, SQL Server (T-SQL), Oracle (PL/SQL), SQLite, BigQuery, Snowflake, Amazon Redshift, and standard ANSI SQL. Dialect-specific syntax (backtick identifiers in MySQL, double-quote identifiers in PostgreSQL, square brackets in T-SQL) is handled correctly.',
  },
  {
    category: 'Formatting',
    question: 'Should SQL keywords be uppercase or lowercase?',
    answer:
      'Convention strongly favors UPPERCASE for SQL keywords (SELECT, FROM, WHERE, JOIN, etc.) with lowercase for user-defined names (table names, column names, aliases). This visual contrast makes queries easier to parse. Our formatter applies UPPERCASE keywords by default with an option to use lowercase or preserve existing casing.',
  },
  {
    category: 'Formatting',
    question: 'How should WHERE clause conditions be formatted?',
    answer:
      'Best practice: each condition on its own line with AND/OR at the beginning (not the end of the previous line). Leading AND/OR makes it easy to comment out individual conditions during debugging: WHERE status = &#39;active&#39;\\n    AND created_at >= &#39;2024-01-01&#39;\\n    AND email NOT LIKE &#39;%@test%&#39;',
  },
  {
    category: 'Formatting',
    question: 'How are CTEs (WITH clauses) formatted?',
    answer:
      'Each CTE is formatted as a named block with its SELECT statement indented inside: WITH cte_name AS (\\n    SELECT ...\\n    FROM ...\\n),\\nnext_cte AS (\\n    ...\\n)\\nSELECT ... The final SELECT query follows after all CTE definitions.',
  },
  {
    category: 'Formatting',
    question: 'How are window functions formatted?',
    answer:
      'Window functions with complex OVER clauses are formatted with PARTITION BY and ORDER BY on separate indented lines inside the OVER(): SUM(amount) OVER (\\n    PARTITION BY user_id\\n    ORDER BY created_at\\n) AS running_total. This makes the partitioning and ordering logic immediately clear.',
  },
  {
    category: 'JOINs',
    question: 'What is the difference between INNER JOIN and LEFT JOIN?',
    answer:
      'INNER JOIN returns only rows where the join condition matches in BOTH tables "” rows with no match in either table are excluded. LEFT JOIN returns ALL rows from the left (first) table plus matching rows from the right table; when no match exists, right-side columns are NULL.',
  },
  {
    category: 'JOINs',
    question: 'When should I use LEFT JOIN vs INNER JOIN?',
    answer:
      'Use INNER JOIN when you only want rows that exist in both tables (e.g., orders that have matching users). Use LEFT JOIN when you want all rows from the primary table regardless of matches (e.g., all users, even those with no orders). Choosing the wrong join type is a common source of missing or unexpected rows.',
  },
  {
    category: 'Subqueries',
    question: 'When should I use a subquery vs a JOIN?',
    answer:
      'JOINs are generally more performant and readable. Prefer JOINs when pulling columns from related tables. Use subqueries for: existence checks (EXISTS is often efficient), when the subquery result is aggregated before joining (derived table), or when the logic is genuinely more readable as a subquery. CTEs often provide the best readability.',
  },
  {
    category: 'Performance',
    question: 'Can a SQL formatter help me find performance issues?',
    answer:
      'Yes "” formatting makes performance problems visible that are hidden in unformatted queries. You can see: which columns appear in WHERE/JOIN (check if indexes exist), whether SELECT * is used (often inefficient), nested subqueries that could be CTEs, missing WHERE clauses on DELETE/UPDATE, and Cartesian product JOINs (CROSS JOIN or missing ON clause).',
  },
  {
    category: 'Performance',
    question: 'What is an N+1 query problem and how does formatting help identify it?',
    answer:
      'An N+1 query is a loop that executes N separate queries for N items (e.g., fetching each user&#39;s orders in a loop instead of one JOIN query). Formatting ORM-generated SQL and comparing it to your expected query count reveals when an ORM is generating N+1 patterns instead of efficient JOINs.',
  },
  {
    category: 'Dialects',
    question: 'How does MySQL backtick quoting differ from PostgreSQL double quotes?',
    answer:
      'MySQL uses backticks (`column_name`) for identifiers, allowing reserved words and special characters as column/table names. PostgreSQL uses double quotes ("Column Name") for quoted identifiers, enabling case-sensitive and special-character names. Standard SQL uses double quotes. Our formatter preserves the quoting style for your chosen dialect.',
  },
  {
    category: 'Dialects',
    question: 'What is the difference between LIMIT (MySQL) and TOP (SQL Server)?',
    answer:
      'MySQL/PostgreSQL use LIMIT n at the end of a query: SELECT * FROM users LIMIT 10. SQL Server uses TOP n after SELECT: SELECT TOP 10 * FROM users. Oracle uses ROWNUM in WHERE (legacy) or FETCH FIRST n ROWS ONLY (12c+). Our formatter places these correctly for the selected dialect.',
  },
  {
    category: 'DDL',
    question: 'Can the formatter handle CREATE TABLE statements?',
    answer:
      'Yes "” CREATE TABLE statements are formatted with columns aligned, constraint keywords properly cased, and indexes/foreign keys on separate lines. Column name, data type, and constraints are aligned for readability when there are multiple columns.',
  },
  {
    category: 'DDL',
    question: 'Can the formatter handle stored procedures?',
    answer:
      'Yes "” stored procedures and functions with BEGIN...END blocks, IF/THEN/ELSE, loops (WHILE, FOR, LOOP), variable declarations, and CURSOR constructs are formatted with proper nesting and indentation. Dialect-specific procedure syntax (T-SQL vs PL/SQL vs PL/pgSQL) is handled based on the selected dialect.',
  },
  {
    category: 'Integration',
    question: 'How do I format SQL from my ORM in Python/Django?',
    answer:
      'Add str(queryset.query) to your Django view/shell to get the raw SQL. Paste it into our formatter to see the formatted query. For SQLAlchemy: compile your query object and print it. For logging all queries: set LOGGING config with django.db.backends at DEBUG level and copy from logs.',
  },
  {
    category: 'Integration',
    question: 'What is sqlfluff and how does it compare to this tool?',
    answer:
      'sqlfluff is a Python command-line SQL linter and formatter that enforces style rules and catches SQL anti-patterns. It integrates with CI/CD pipelines and pre-commit hooks. Our online formatter is better for quick one-off formatting without installation. sqlfluff is better for automated enforcement in a codebase.',
  },
  {
    category: 'Safety',
    question: 'Does the formatter warn about dangerous SQL like DELETE without WHERE?',
    answer:
      'Yes "” our formatter highlights potentially dangerous patterns: DELETE without WHERE clause (deletes all rows), UPDATE without WHERE clause (updates all rows), and SELECT * (returns all columns, often inefficient). These are warnings, not errors "” the query is still formatted.',
  },
  {
    category: 'Privacy',
    question: 'Is it safe to paste production SQL queries with real data?',
    answer:
      'Yes "” all formatting runs entirely in your browser. No SQL content including table names, conditions, or embedded data values in INSERT statements is transmitted to our servers. The formatter is safe for queries containing PII, financial data, or proprietary schema information.',
  },
  {
    category: 'Indentation',
    question: 'Should I use 2-space or 4-space indentation for SQL?',
    answer:
      'Both are valid; the key is consistency within a project. Our formatter defaults to 4-space indentation for SQL (slightly more common than the 2-space convention popular in YAML/JavaScript). Choose based on your team&#39;s style guide and configure your IDE to match.',
  },
  {
    category: 'Comments',
    question: 'Does the formatter preserve SQL comments?',
    answer:
      'Yes "” both single-line comments (-- comment) and block comments (/* comment */) are preserved in their positions relative to the SQL they annotate. Comments in SELECT lists, WHERE clauses, and between CTE definitions are maintained after formatting.',
  },
  {
    category: 'General',
    question: 'What is an online SQL formatter?',
    answer:
      'An online SQL formatter is a free web tool that takes raw or minified SQL queries and reformats them with consistent indentation, keyword casing, and line breaks "” making them readable and maintainable. This SQL formatter supports Standard SQL, MySQL, PostgreSQL, and SQLite dialects. Paste any SQL query and click Format to get clean, properly indented output instantly with no installation required.',
  },
];

export const sqlFormatterContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
