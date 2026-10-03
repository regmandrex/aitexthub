import type { ToolContent } from './index';
import type { FaqItem } from '@/components/faqData';

function WriteUp() {
  return (
    <section className="rounded-2xl border-3 border-black bg-white p-4 shadow-neo-sm md:p-6 mt-10">
      <div className="prose prose-slate max-w-none">
        <h2>[21] SQL Formatter: Free Online SQL Beautifier, Formatter, and Pretty Printer</h2>
        <p>When generated under rapid development timelines — captured from query execution logs, dumped via ORM debuggers, pulled from operational production reporting consoles, or compressed during network payload transit — SQL frequently becomes an unreadable, single-line mess. With our free online SQL formatter, you can instantly turn compressed, misaligned, or poorly spaced statements into clean, structured queries with unified keyword casing, neatly aligned operators, and clear visual depth. We provide full compatibility with major SQL implementations: MySQL, PostgreSQL, SQL Server (T-SQL), Oracle (PL/SQL), SQLite, BigQuery, Snowflake, Amazon Redshift, and ANSI SQL.</p>
        <p>[23] Whether you are debugging a complex multi-table JOIN that returned unexpected results, reviewing a stored procedure that a previous developer wrote in one continuous line, optimizing a slow query by making its structure visible, or preparing SQL for documentation or a code review, our formatter makes the logic immediately clear. All formatting runs in your browser "" no query content is sent to any server.</p>

        <h2>[24] Why SQL Formatting Matters for Developer Productivity</h2>
        <p>Unlike common procedural and object-oriented languages, SQL hides its architectural structure — detailing which tables link together, how filtering expressions behave, and which attributes receive aggregations — entirely within the raw text layout. To the relational database parser, a dense, one-line script spanning 200 characters functions identically to that exact logic spread across 30 indented lines; for human engineers reading the code, however, the gap in mental effort and readability is tremendous.</p>
        <p>Unstructured SQL causes distinct issues:</p>
        <ul>
          <li>
            <strong>Join conditions invisible at a glance</strong>: a multi-table join where the ON
            clause is buried in the middle of a long line requires careful parsing to understand which
            tables are connected and on what keys.
          </li>
          <li><strong>WHERE clause complexity hidden</strong>: unindented nested AND/OR conditions featuring complex precedence can easily be misread, resulting in faulty query assumptions.</li>
          <li><strong>Subquery boundaries unclear</strong>: inline-embedded subqueries and correlated subqueries prove hard to spot and mentally scope out.</li>
          <li><strong>CTE structure lost</strong>: multiple CTEs inside WITH clauses forfeit their logical separation if formatted as a solid block of text.</li>
          <li><strong>Code review friction</strong>: before assessing correctness, reviewers are forced to mentally format unindented SQL.</li>
        </ul>

        <h2>SQL Formatting Standards and Conventions</h2>
        <p>SQL lacks a single canonical formatting standard, unlike programming languages featuring enforced style guides (Go's gofmt, Rust's rustfmt). Still, decades of SQL community practice have spawned several widely-adopted conventions:</p>

        <h3>Keyword Casing</h3>
        <p>Uppercase keywords represent the most common convention: <code>SELECT</code>, <code>FROM</code>, <code>WHERE</code>, <code>JOIN</code>, <code>GROUP BY</code>, <code>ORDER BY</code>, <code>HAVING</code>, <code>LIMIT</code>. This creates visual contrast separating SQL structural keywords from user-defined names like table names, column names, and aliases, which usually appear in lowercase or mixed case. Our formatter provides: UPPER keywords (default), lowercase keywords, and preserve (leave as-is).</p>

        <h3>Clause-Per-Line Layout</h3>
        <p>Placing every major SQL clause on its own line yields maximum readability:</p>
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
        <p>Scanning the left margin allows you to grasp the complete query structure prior to reading specifics, making this layout instantly parseable:</p>

        <h3>Indentation of Column Lists</h3>
        <p>Typically, SELECT columns get indented by 4 spaces beneath the SELECT keyword. When numerous columns exist, each occupies its own line. Readability improves when computed columns and aliases align.</p>

        <h3>JOIN Formatting</h3>
        <p>Indented ON conditions sit on the following line while each JOIN clause claims its own line:</p>
        <pre>{`FROM orders o
INNER JOIN users u ON o.user_id = u.id
LEFT JOIN order_items oi ON o.id = oi.order_id
    AND oi.deleted_at IS NULL`}</pre>

        <h3>WHERE Clause Alignment</h3>
        <p>Positioning AND/OR at the beginning of every condition line rather than at the end of the previous one aligns multiple conditions within WHERE. Debugging becomes simpler since individual conditions can be commented out easily:</p>
        <pre>{`WHERE status = 'active'
    AND created_at >= '2024-01-01'
    AND email NOT LIKE '%@test.com'`}</pre>

        <h2>SELECT Statement Formatting in Detail</h2>
        <p>
          The SELECT statement is the most complex SQL construct to format because of its many optional
          clauses and the variety of expressions that can appear in each. Our formatter handles:
        </p>

        <h3>DISTINCT alongside TOP/LIMIT Modifiers</h3>
        <p>Treated as a compound keyword, <code>SELECT DISTINCT</code> pairs with SQL Server's <code>SELECT TOP 100</code> and MySQL's <code>LIMIT</code> clause, all positioned correctly for their respective dialects.</p>

        <h3>Column Expressions</h3>
        <p>Appropriate indentation formats complex column expressions such as CASE statements, aggregate functions, string operations, and date functions to clarify their structure:</p>
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
        <p>Visual separation from the outer query level occurs when scalar subqueries inside the SELECT list are indented:</p>
        <pre>{`SELECT
    u.email,
    (
        SELECT COUNT(*)
        FROM orders o
        WHERE o.user_id = u.id
    ) AS order_count`}</pre>

        <h2>Various JOIN Types and Their Layouts</h2>
        <p>SQL features seven join varieties, and our tool maintains and clarifies the distinct semantics of each:</p>
        <ul>
          <li><strong>INNER JOIN</strong> (or just JOIN): yields rows where matching conditions occur in both tables. This represents the most frequent join type.</li>
          <li><strong>LEFT JOIN / LEFT OUTER JOIN</strong>: produces all rows from the left table alongside matching rows from the right, inserting NULLs for non-matching right-side columns.</li>
          <li><strong>RIGHT JOIN / RIGHT OUTER JOIN</strong>: yields every row from the right-hand table; typically converted to a LEFT JOIN for uniformity.</li>
          <li><strong>FULL OUTER JOIN</strong>: yields every row from both tables; contains NULLs where matches are absent.</li>
          <li><strong>CROSS JOIN</strong>: Cartesian product &mdash; every row from the left table is combined with every row from the right table. Seldom applied on purpose; frequently an error.</li>
          <li><strong>SELF JOIN</strong>: connecting a table to itself via aliases to search hierarchical or relational records inside that same table.</li>
        </ul>
        <p>Our formatter standardizes JOIN keyword casing and guarantees that every JOIN along with its ON condition stands out clearly from primary query clauses.</p>

        <h2>Subqueries: Inline variations, Derived Tables, and CTEs</h2>

        <h3>Inline Subqueries</h3>
        <p>Subqueries inside WHERE clauses (EXISTS, IN, comparison operators) are arranged with the inner SELECT pushed inward under the outer condition:</p>
        <pre>{`WHERE user_id IN (
    SELECT id
    FROM users
    WHERE status = 'premium'
)`}</pre>

        <h3>Derived Table Subqueries</h3>
        <p>Subqueries applied as derived tables within the FROM clause are structured as a labeled block:</p>
        <pre>{`FROM (
    SELECT
        user_id,
        SUM(amount) AS total
    FROM payments
    GROUP BY user_id
) AS payment_totals`}</pre>

        <h3>Recursive and Common Table Expressions (CTEs)</h3>
        <p>CTEs utilizing the WITH clause are structured as labeled, distinctly partitioned blocks. Multiple CTEs within one WITH clause are divided using visible spacing:</p>
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
        <p>Recursive CTEs, applied for tree structures (corporate hierarchies, parts lists, graph navigation), feature clearly separated anchor and recursive components:</p>
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
        <p>Window functions (analytic functions) like <code>ROW_NUMBER()</code>, <code>RANK()</code>, <code>LAG()</code>, <code>SUM() OVER()</code> are structured to ensure the OVER clause is easily legible:</p>
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

        <h2>Key Differences in SQL Dialects Managed by Our Formatter</h2>

        <h3>MySQL / MariaDB</h3>
        <p>Identifiers in MySQL are enclosed in backticks (<code>`table_name`</code>), the <code>LIMIT offset, count</code> format is supported, and built-in functions such as <code>GROUP_CONCAT()</code>, <code>IF()</code>, and <code>IFNULL()</code> are included. Backtick-quoted identifiers are identified by our formatter, which properly manages MySQL-unique syntax.</p>

        <h3>PostgreSQL</h3>
        <p>PostgreSQL relies on double-quote identifiers (<code>"TableName"</code>), handles arrays, JSON operators (<code>-&gt;</code>, <code>-&gt;&gt;</code>, <code>@&gt;</code>), the DISTINCT ON extension, <code>RETURNING</code> clauses, along with <code>ON CONFLICT</code> upsert syntax. Aggregate functions, window functions, and type casts (<code>::</code>) specific to PostgreSQL receive proper formatting.</p>

        <h3>SQL Server / T-SQL</h3>
        <p>T-SQL features square bracket identifiers (<code>[column name]</code>), <code>TOP</code> instead of <code>LIMIT</code>, <code>IDENTITY</code> columns, as well as T-SQL-unique syntax like <code>BEGIN...END</code> blocks, <code>TRY...CATCH</code>, and stored procedure syntax.</p>

        <h3>Oracle PL/SQL</h3>
        <p>Oracle employs <code>ROWNUM</code> (along with newer <code>FETCH FIRST n ROWS ONLY</code>), <code>NVL()</code> rather than COALESCE, and PL/SQL-oriented constructs. <code>CONNECT BY</code> for hierarchical queries is Oracle-exclusive and formatted appropriately.</p>

        <h3>BigQuery / Snowflake / Redshift</h3>
        <p>Contemporary cloud data warehouse SQL dialects feature distinct elements: BigQuery's nested and repeated fields, Snowflake's VARIANT/ARRAY/OBJECT types, and Redshift's distribution keys and sort keys. Choose your desired dialect within our formatter for dialect-specific keyword recognition and formatting.</p>

        <h2>Data Manipulation Language: INSERT, UPDATE, DELETE</h2>

        <h3>INSERT Formatting</h3>
        <p>INSERT INTO statements featuring multiple columns and values are arranged with every value set on a separate line to enhance clarity. Multi-row INSERTs organize each tuple logically:</p>
        <pre>{`INSERT INTO users (email, name, created_at)
VALUES
    ('alice@example.com', 'Alice Smith', NOW()),
    ('bob@example.com', 'Bob Jones', NOW()),
    ('charlie@example.com', 'Charlie Brown', NOW());`}</pre>

        <h3>UPDATE Formatting</h3>
        <p>UPDATE statements place every SET clause on its own individual line:</p>
        <pre>{`UPDATE users
SET
    status = 'inactive',
    updated_at = NOW(),
    deactivation_reason = 'terms_violation'
WHERE id = 12345
    AND status != 'deleted';`}</pre>

        <h3>DELETE Formatting</h3>
        <p>DELETE statements are structured with the WHERE clause clearly visible "" missing WHERE clauses (which delete all rows) rank among the most catastrophic SQL mistakes. Our formatter optionally warns when a DELETE statement lacks a WHERE clause.</p>

        <h2>Data Definition Language: CREATE, ALTER, DROP</h2>
        <p>Data Definition Language statements are organized with uniform column alignment:</p>
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

        <h2>Functions and Stored Procedures</h2>
        <p>Our parser handles procedural SQL extensions such as loops, triggers, functions, and stored procedures. BEGIN...END blocks feature correct indentation. IF/THEN/ELSE statements are structured with clear nesting. Variable declarations are properly lined up.</p>

        <h2>SQL Formatting for Documentation and Code Reviews</h2>
        <p>Formatted SQL greatly enhances code review quality. Reviewers can easily spot: missing indexes (by checking which columns show up in WHERE/JOIN/ORDER BY), potential N+1 query patterns, missing WHERE clauses on UPDATE/DELETE, wrong JOIN types (INNER where LEFT was meant), and GROUP BY columns that do not match SELECT columns.</p>
        <p>Within technical documentation — including system wiki articles, repository README files, architectural decision logs, or shared Confluence spaces — standardizing SQL structure through clean formatting ensures team members can interpret design intentions without prior knowledge of the implementation specifics. Pair every formatted snippet with explanatory context outlining its practical operation and underlying purpose.</p>

        <h2>Incorporating SQL Formatting into Your Development Workflow</h2>

        <h3>IDE Plugins</h3>
        <p>Major IDEs provide SQL formatting plugins: DataGrip (JetBrains) offers built-in SQL formatting with dialect support, SQL Formatter for VS Code, and DBeaver includes a SQL formatter in its editor. Set these up to match your team's rules so all SQL in the codebase is formatted uniformly.</p>

        <h3>Pre-commit Hooks</h3>
        <p>Integrate SQL formatting into your pre-commit hook pipeline by utilizing packages like <code>sqlfluff</code> (a robust Python-driven SQL linter and formatter compatible with numerous dialects) or <code>sql-formatter</code> (an npm package). Enforcing consistent styling during commits removes style arguments during code reviews.</p>

        <h3>Debugging Output from ORM Queries</h3>
        <p>ORMs like SQLAlchemy, Django ORM, ActiveRecord, Sequelize, and Hibernate can log generated SQL queries, but the output is usually a single-line, unformatted string. Paste ORM-generated SQL into our formatter to understand what the ORM is generating "” essential for debugging N+1 queries and performance issues.</p>

        <h2>Privacy and Performance</h2>
        <p>All SQL formatting runs entirely in your browser using JavaScript. No SQL content "” including column names, table names, query logic, or data values embedded in INSERT statements "” is sent to our servers. The formatter handles queries of any length and complexity without performance loss. Your business logic, database schema, and data stay completely private.</p>
      </div>
    </section>
  );
}

const faqs: FaqItem[] = [
  {
    category: 'General',
    question: 'What exactly is a SQL formatter?',
    answer:
      'An automated SQL formatter accepts unaligned, collapsed, or inconsistently drafted queries and restructures them into tidy, properly spaced layouts highlighting logical clauses and uniform casing. This process dramatically clarifies complex queries while guaranteeing that execution logic and query results remain completely identical.',
  },
  {
    category: 'General',
    question: 'Will running the formatter alter my SQL query execution?',
    answer:
      'No, SQL formatting solely modifies whitespace alongside optional keyword casing. The database engine totally ignores formatting. A formatted and unformatted query featuring identical syntax create identical execution plans and results.',
  },
  {
    category: 'General',
    question: 'Which specific SQL dialects are compatible with the formatter?',
    answer:
      'Our utility works with MySQL/MariaDB, PostgreSQL, SQL Server (T-SQL), Oracle (PL/SQL), SQLite, BigQuery, Snowflake, Amazon Redshift, alongside standard ANSI SQL. Specific dialect syntax like MySQL backticks, PostgreSQL double-quotes, and T-SQL square brackets is processed accurately.',
  },
  {
    category: 'Formatting',
    question: 'Is it better for SQL keywords to be uppercase or lowercase?',
    answer:
      'Common engineering guidelines advocate for UPPERCASE styling across standard SQL operators (SELECT, FROM, WHERE, JOIN, and related commands), counterbalanced by lowercase labels for custom entities (table names, column names, and field aliases). This sharp visual contrast allows readers to parse queries rapidly. By default, our formatter enforces UPPERCASE operators, while also providing alternatives to convert them to lowercase or retain your original input.',
  },
  {
    category: 'Formatting',
    question: 'How ought conditions inside a WHERE clause to be structured?',
    answer:
      'Best practice: each condition on its own line with AND/OR at the beginning (not the end of the previous line). Leading AND/OR makes it easy to comment out individual conditions during debugging: WHERE status = &#39;active&#39;\\n    AND created_at >= &#39;2024-01-01&#39;\\n    AND email NOT LIKE &#39;%@test%&#39;',
  },
  {
    category: 'Formatting',
    question: 'In what manner are CTEs featuring WITH clauses arranged?',
    answer:
      'Each CTE is formatted as a named block with its SELECT statement indented inside: WITH cte_name AS (\\n    SELECT ...\\n    FROM ...\\n),\\nnext_cte AS (\\n    ...\\n)\\nSELECT ... The final SELECT query follows after all CTE definitions.',
  },
  {
    category: 'Formatting',
    question: 'How are window functions supposed to be styled?',
    answer:
      'Window functions with complex OVER clauses are formatted with PARTITION BY and ORDER BY on separate indented lines inside the OVER(): SUM(amount) OVER (\\n    PARTITION BY user_id\\n    ORDER BY created_at\\n) AS running_total. This makes the partitioning and ordering logic immediately clear.',
  },
  {
    category: 'JOINs',
    question: 'What distinguishes an INNER JOIN from a LEFT JOIN?',
    answer:
      'INNER JOIN outputs exclusively rows where the matching condition is met in BOTH tables, omitting rows lacking a match in either side. LEFT JOIN provides ALL rows originating from the left (first) table alongside matching rows from the right table; whenever no match is present, the right-side columns are designated as NULL.',
  },
  {
    category: 'JOINs',
    question: 'At what point is it better to choose LEFT JOIN over INNER JOIN?',
    answer:
      'Utilize INNER JOIN whenever you require solely rows present in both tables (for instance, orders that feature matching users). Employ LEFT JOIN when you need every row from the primary table regardless of matches (such as all users, even those lacking orders). Selecting the incorrect join type frequently leads to missing or unexpected rows.',
  },
  {
    category: 'Subqueries',
    question: 'When is it appropriate to opt for a subquery instead of a JOIN?',
    answer:
      'JOINs typically offer greater performance and readability. Favor JOINs when extracting columns originating from related tables. Apply subqueries for: existence checks (EXISTS frequently proves efficient), when the subquery outcome is aggregated prior to joining (derived table), or whenever the logic is genuinely clearer as a subquery. CTEs frequently deliver optimal readability.',
  },
  {
    category: 'Performance',
    question: 'Is it possible for a SQL formatter to assist in detecting performance problems?',
    answer:
      'Indeed ” formatting brings performance problems to light that remain concealed within unformatted queries. You can spot: which columns appear inside WHERE/JOIN (verifying if indexes exist), whether SELECT * is deployed (frequently inefficient), nested subqueries that could become CTEs, missing WHERE clauses on DELETE/UPDATE, along with Cartesian product JOINs (CROSS JOIN or an absent ON clause).',
  },
  {
    category: 'Performance',
    question: 'What defines an N+1 query problem and in what way does formatting assist in spotting it?',
    answer:
      'An N+1 query constitutes a loop executing N separate queries regarding N items (such as fetching every user\'s orders via a loop instead of a single JOIN query). Formatting ORM-generated SQL and evaluating it against your expected query count uncovers when an ORM produces N+1 patterns rather than efficient JOINs.',
  },
  {
    category: 'Dialects',
    question: 'In what ways are MySQL backtick quotes distinct from PostgreSQL double quotes?',
    answer:
      'MySQL relies on backticks (`column_name`) for identifiers, which permits reserved words and special characters inside column or table names. PostgreSQL depends on double quotes ("Column Name") for identifiers, supporting case-sensitive and special-character naming. Standard SQL utilizes double quotes. Our formatter keeps the original quoting style intact for your selected dialect.',
  },
  {
    category: 'Dialects',
    question: 'How do LIMIT (MySQL) and TOP (SQL Server) differ from one another?',
    answer:
      'MySQL and PostgreSQL put LIMIT n at the query\'s conclusion: SELECT * FROM users LIMIT 10. SQL Server applies TOP n immediately following SELECT: SELECT TOP 10 * FROM users. Oracle employs ROWNUM within WHERE (older versions) or FETCH FIRST n ROWS ONLY (12c+). Our formatter arranges these properly for your chosen dialect.',
  },
  {
    category: 'DDL',
    question: 'Is the formatter capable of processing CREATE TABLE statements?',
    answer:
      'Yes ” CREATE TABLE statements receive formatting featuring aligned columns, properly cased constraint keywords, alongside indexes and foreign keys placed on separate lines. Column name, data type, and constraints align for readability whenever multiple columns exist.',
  },
  {
    category: 'DDL',
    question: 'Can this formatter manage stored procedures successfully?',
    answer:
      'Indeed ” stored procedures and functions featuring BEGIN...END blocks, IF/THEN/ELSE, loops (WHILE, FOR, LOOP), variable declarations, and CURSOR constructs are formatted utilizing proper nesting and indentation. Dialect-specific procedure syntax (T-SQL vs PL/SQL vs PL/pgSQL) gets managed according to the chosen dialect.',
  },
  {
    category: 'Integration',
    question: 'What is the procedure for formatting SQL generated by my ORM in Python/Django?',
    answer:
      'Include str(queryset.query) within your Django view or shell to retrieve the raw SQL. Insert it into our formatter to view the cleaned query. For SQLAlchemy: compile your query instance and print it. For capturing all queries: configure LOGGING using django.db.backends at DEBUG level and copy directly from the logs.',
  },
  {
    category: 'Integration',
    question: 'What exactly is sqlfluff and how does this tool measure up against it?',
    answer:
      'sqlfluff functions as a Python command-line SQL linter and formatter that mandates style standards and identifies SQL anti-patterns. It works seamlessly with CI/CD pipelines alongside pre-commit hooks. Our web-based formatter excels for fast, single-use formatting without any setup. sqlfluff works better for automated style enforcement across a repository.',
  },
  {
    category: 'Safety',
    question: 'Does the formatter provide alerts for risky SQL like DELETE without WHERE?',
    answer:
      'Indeed, our formatter points out hazardous structures: DELETE lacking a WHERE clause (removes every row), UPDATE lacking a WHERE clause (modifies every row), and SELECT * (fetches all columns, frequently performance-heavy). These serve as warnings rather than errors, meaning the query still gets formatted.',
  },
  {
    category: 'Privacy',
    question: 'Is there any risk in entering live production SQL queries containing actual data?',
    answer:
      'Yes, all formatting processing happens completely inside your web browser. No SQL text, whether table names, conditions, or embedded data values within INSERT statements, gets sent to our servers. The formatter remains secure for queries featuring PII, financial info, or confidential schema details.',
  },
  {
    category: 'Indentation',
    question: '[1] Is it better to use 2-space or 4-space indentation for SQL?',
    answer:
      '[2] Both options work fine; consistency across the project is what matters. Our formatter defaults to 4-space indentation for SQL (which is slightly more popular than the 2-space standard found in YAML/JavaScript). Pick based on your team&#39;s style guide and set up your IDE accordingly.',
  },
  {
    category: 'Comments',
    question: '[3] Does the formatter keep SQL comments intact?',
    answer:
      '[4] Yes "” both single-line comments (-- comment) and block comments (/* comment */) stay in their exact places relative to the SQL they describe. Comments within SELECT clauses, WHERE statements, and between CTE definitions are preserved after the format process.',
  },
  {
    category: 'General',
    question: '[5] What is an online SQL formatter?',
    answer:
      '[6] An online SQL formatter is a free web utility that takes raw or minified SQL statements and reorganizes them with proper indentation, keyword casing, and line breaks "” ensuring they remain readable and easy to maintain. This SQL formatter works with Standard SQL, MySQL, PostgreSQL, and SQLite dialects. Input any SQL query and press Format to receive clean, correctly indented output immediately without needing any setup.',
  },
];

export const sqlFormatterContent: ToolContent = {
  writeUp: <WriteUp />,
  faqs,
};
