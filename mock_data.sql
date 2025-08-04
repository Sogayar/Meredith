-- ----------------------------------------------------------------
--                          MOCKED DATA INSERTION (v2 - Multi-tenant)
-- ----------------------------------------------------------------

-- Clear existing data (optional, for clean re-runs)
TRUNCATE TABLE messages RESTART IDENTITY CASCADE;
TRUNCATE TABLE conversations RESTART IDENTITY CASCADE;
TRUNCATE TABLE patients RESTART IDENTITY CASCADE;
TRUNCATE TABLE tenants RESTART IDENTITY CASCADE;

-- Insert sample tenants
INSERT INTO tenants (name, n8n_webhook_url)
VALUES
    ('Clínica Saúde Total', 'https://n8n.example.com/webhook/saude-total'),
    ('Consultório Bem Estar', 'https://n8n.example.com/webhook/bem-estar');

-- Get tenant IDs (assuming auto-increment starts at 1 for simplicity, adjust if needed)
-- In a real application, you'd fetch these IDs after insertion.
-- For this mock, we'll assume IDs 1 and 2 for the inserted tenants.

-- Insert sample patients linked to tenants
INSERT INTO patients (tenant_id, name, email, phone, consent_given, consent_at)
VALUES
    (1, 'João Carlos', 'joao.carlos@example.com', '5511987654321', TRUE, NOW()),
    (1, 'Ana Sofia', 'ana.sofia@example.com', '5511912345678', TRUE, NOW()),
    (2, 'Carlos Silva', 'carlos.silva@example.com', '5521998765432', TRUE, NOW()),
    (2, 'Sofia Marques', 'sofia.marques@example.com', '5521912348765', FALSE, NULL);

-- Get patient IDs (assuming auto-increment starts at 1 for simplicity, adjust if needed)
-- For this mock, we'll assume IDs 1, 2, 3, 4 for the inserted patients.

-- Insert sample conversations linked to tenants and patients
INSERT INTO conversations (tenant_id, patient_id, patient_name, patient_avatar_url, platform, n8n_workflow_enabled, last_message_preview, last_message_at, unread_count)
VALUES
    (1, 1, 'João Carlos', '/assets/avatar-dr-joao.svg', 'whatsapp', TRUE, 'Olá! Gostaria de marcar um retorno.', NOW() - INTERVAL '1 hour', 2),
    (1, 2, 'Ana Sofia', '/assets/avatar-dra-ana.svg', 'instagram', FALSE, 'O resultado do meu exame já saiu?', NOW() - INTERVAL '2 hours', 0),
    (2, 3, 'Carlos Silva', '/assets/avatar-dr-carlos.svg', 'facebook', TRUE, 'Qual o valor da consulta?', NOW() - INTERVAL '1 day', 0),
    (2, 4, 'Sofia Marques', '/assets/avatar-dra-sofia.svg', 'website', FALSE, 'Ok, obrigado!', NOW() - INTERVAL '2 days', 0);

-- Get conversation IDs (assuming auto-increment starts at 1 for simplicity, adjust if needed)
-- For this mock, we'll assume IDs 1, 2, 3, 4 for the inserted conversations.

-- Insert sample messages for João Carlos (Conversation ID 1)
INSERT INTO messages (conversation_id, sender_type, content, type, created_at)
VALUES
    (1, 'patient', 'Olá! Gostaria de marcar um retorno.', 'text', NOW() - INTERVAL '1 hour' + INTERVAL '1 minute'),
    (1, 'clinic', 'Claro, João. Qual o melhor dia e horário para você?', 'text', NOW() - INTERVAL '1 hour' + INTERVAL '2 minutes'),
    (1, 'patient', 'Tenho um áudio aqui com mais detalhes.', 'audio', NOW() - INTERVAL '1 hour' + INTERVAL '3 minutes');

-- Insert sample messages for Ana Sofia (Conversation ID 2)
INSERT INTO messages (conversation_id, sender_type, content, type, created_at)
VALUES
    (2, 'patient', 'O resultado do meu exame já saiu?', 'text', NOW() - INTERVAL '2 hours' + INTERVAL '1 minute'),
    (2, 'clinic', 'Ainda não, Ana. Assim que sair, avisaremos.', 'text', NOW() - INTERVAL '2 hours' + INTERVAL '2 minutes');

-- Insert sample messages for Carlos Silva (Conversation ID 3)
INSERT INTO messages (conversation_id, sender_type, content, type, created_at)
VALUES
    (3, 'patient', 'Qual o valor da consulta?', 'text', NOW() - INTERVAL '1 day' + INTERVAL '1 minute'),
    (3, 'clinic', 'Nossas consultas custam R$250. Podemos agendar?', 'text', NOW() - INTERVAL '1 day' + INTERVAL '2 minutes'),
    (3, 'patient', 'Vou enviar um documento com meus dados.', 'file', NOW() - INTERVAL '1 day' + INTERVAL '3 minutes');

-- Insert sample messages for Sofia Marques (Conversation ID 4)
INSERT INTO messages (conversation_id, sender_type, content, type, created_at)
VALUES
    (4, 'patient', 'Ok, obrigado!', 'text', NOW() - INTERVAL '2 days' + INTERVAL '1 minute');